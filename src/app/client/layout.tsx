import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import styles from "./layout.module.css";

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
				{isSignedIn && <Link href="/crm">Back to CRM</Link>}

				<Link href="/client/news">News</Link>
			</header>
			<main className={styles.main}>{children}</main>
		</>
	);
}
