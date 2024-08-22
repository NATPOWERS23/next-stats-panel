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

	if (!isLoaded) {
		return <p>Loading</p>;
	}

	const [isSelected, setIsSelected] = useState(false);
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
							paddingLeft: "240px",
						}}
					>
						<p>You currently do not have access to the CRM tools.</p>
						{/* <OrganizationSwitcher hidePersonal={true} defaultOpen={false} /> */}
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

						<button type="button" onClick={() => fetchUserMemberships()}>
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
