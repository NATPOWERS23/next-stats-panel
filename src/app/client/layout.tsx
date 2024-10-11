import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import styles from "./layout.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId }: { userId: string | null } = auth();
	const isSignedIn = Boolean(userId);

	return (
		<>
			<header className={styles.header}>
				{isSignedIn && (
					<LinkButton content="Back to CRM" iconName="arrow_left" href="/crm" />
				)}

				<LinkButton content="News" href="/client/news" />
			</header>
			<main className={styles.main}>{children}</main>
		</>
	);
}
