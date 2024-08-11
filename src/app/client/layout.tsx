import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignInButton } from "@clerk/nextjs";

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
        {isSignedIn && (
          <button type="button">
            <Link href="/crm">Back to CRM</Link>
          </button>
        )}

        <button type="button">
          <Link href="/client/news">News</Link>
        </button>

        <SignedOut>
          <SignInButton forceRedirectUrl="/crm" />
        </SignedOut>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
