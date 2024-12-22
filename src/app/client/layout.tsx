import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import pawLogo from "@public/assets/logos/pawlogo.svg";
import MobileMenu from "@/features/client/MobileMenu/MobileMenu";
import LinkButton from "@/components/LinkButton/LinkButton";
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
      <header
        className={`${styles.header} font-bold text-md items-center relative`}
      >

        {isSignedIn && (
          <LinkButton content="Back to CRM" iconName="arrow_left" href="/crm" />
        )}

        <Link href="/client" aria-label="Welcome Page">
          <Image src={pawLogo} alt="app logo" width={160} />
        </Link>

        <ul className={`${styles.list} hidden md:flex `}>
          <LinkButton content="News" href="/client/news" />
          <LinkButton content="Blog" href="/client/blogs" />
          <LinkButton content="Docs" href="/client/docs" />
        </ul>

        <MobileMenu />
      </header>

      <main className={styles.main}>{children}</main>
    </>
  );
}
