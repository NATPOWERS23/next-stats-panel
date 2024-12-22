import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import TwitchButton from "../TwitchButton/TwitchButton";
import ClerkLogoutButton from "../ClerkLogoutButton/ClerkLogoutButton";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { userId, has } = auth();

  const userHasRole =
    has({ role: "org:member" }) ||
    has({ role: "org:channel_owner" }) ||
    has({ role: "org:adminr" });

  const adminRole = has({ role: "org:admin" });

  const list = (
    <ul className={styles.navbarList}>
      {!userId ? (
        <>
          <div className={styles.item}>
            <Link href="/sign-in">
              <li>Login</li>
            </Link>
          </div>

          <div className={styles.item}>
            <Link href="/sign-up">
              <li>Sign Up</li>
            </Link>
          </div>
        </>
      ) : (
        <>
          {!userHasRole && <TwitchButton />}

          <li className="flex items-center">
            <UserButton />
          </li>

          {adminRole &&
            <>
              <div className={styles.item}>
                <Link href="https://dashboard.clerk.com/" rel="noopener noreferrer" target="_blank">
                  <li>Clerk</li>
                </Link>
              </div>

              <div className={styles.item}>
                <Link href="https://cloud.mongodb.com/v2/" rel="noopener noreferrer" target="_blank">
                  <li>MongoDB</li>
                </Link>
              </div>
            </>
          }

          <div className={styles.item}>
            <Link href="/profile">
              <li>Profile</li>
            </Link>
          </div>
        </>
      )}
      <div className={styles.item}>
        <Link href="/client">
          <li>Client</li>
        </Link>
      </div>

      <li>
        <ClerkLogoutButton />
      </li>
    </ul>
  );

  return (
    <>
      <nav className="right-0 hidden lg:flex fixed z-10">{list}</nav>
      {/* mobile navbar */}
      <nav className="lg:hidden left-0 bottom-0 w-full fixed z-10">{list}</nav>
    </>
  );
}
