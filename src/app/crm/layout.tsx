"use client";

import { Protect } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { AccessDenied } from "@/components/AccessDenied/AccessDenied";
import CreateMembershipView from "@/features/crm/CreateMembershipView/CreateMembershipView";

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

	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<main className={`${styles.main} px-2 sm:px-8`}>
				<Protect
					condition={hasRequiredRole}
					fallback={
						<>
							<AccessDenied />
							<CreateMembershipView />
						</>
					}
				>
					{children}
				</Protect>
			</main>
		</div>
	);
}
