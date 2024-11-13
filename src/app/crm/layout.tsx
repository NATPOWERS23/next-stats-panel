"use client";

import { Protect } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { AccessDenied } from "@/components/AccessDenied/AccessDenied";
import CreateMembershipView from "@/components/CreateMembershipView/CreateMembershipView";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function CrmLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const hasRequiredRole = (has: (arg0: { role: string }) => boolean) => {
		return (
			has({ role: "org:admin" }) ||
			has({ role: "org:channel_owner" }) ||
			has({ role: "org:member" })
		);
	};

	const fallbackContent = (
		<>
			<PageTitle title="Terms of use" />
			<AccessDenied />
			<CreateMembershipView />
		</>
	);

	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<main className={`${styles.main} px-2 sm:px-8`}>
				<Protect
					condition={hasRequiredRole}
					fallback={<PageWrapper content={fallbackContent} />}
				>
					{children}
				</Protect>
			</main>
		</div>
	);
}
