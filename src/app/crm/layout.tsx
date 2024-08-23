"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { Protect, useOrganizationList } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function CrmLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isLoaded, setActive, userMemberships } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	});

	const [isSelected, setIsSelected] = useState(true);
	const [intervalId, setIntervalId] = useState<any>(null);

	useEffect(() => {
		const interval = setInterval(fetchUserMemberships, 10000);
		setIntervalId(interval);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (isSelected) {
			clearInterval(intervalId);
		}
	}, [isSelected, intervalId]);

	if (!isLoaded) {
		return <p>Loading</p>;
	}

	const handleReloadButton = () => {
		setIsSelected(false);
		fetchUserMemberships();
	};

	const fetchUserMemberships = async () => {
		console.log("fetching organizations...");
		userMemberships.fetchPage(userMemberships.page);
	};

	const handleSelectOrganization = (organization: string) => {
		setIsSelected(true);
		setActive({ organization });
	};

	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<Protect
				condition={(has) =>
					has({ role: "org:admin" }) ||
					has({ role: "org:channel_owner" }) ||
					has({ role: "org:member" })
				}
				fallback={
					<div
						style={{
							width: "100%",
						}}
					>
						<p>You currently do not have access to the CRM tools.</p>
						<ul>
							{userMemberships.data?.map((mem) => (
								<li key={mem.id}>
									<span>{mem.organization.name}</span>
									<button
										type="button"
										onClick={() =>
											handleSelectOrganization(mem.organization.id)
										}
									>
										Select
									</button>
								</li>
							))}
						</ul>

						<button type="button" onClick={() => handleReloadButton()}>
							Reload organizations
						</button>
					</div>
				}
			>
				<main className={styles.main}>{children}</main>
			</Protect>
		</div>
	);
}
