import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import styles from "./Navbar.module.css";
import TwitchButton from "../TwitchButton/TwitchButton";
import ClerkLogoutButton from "../ClerkLogoutButton/ClerkLogoutButton";

export default function Navbar() {
  const { userId, has } = auth();

  const userHasRole =
    has({ role: "org:member" }) ||
    has({ role: "org:channel_owner" }) ||
    has({ role: "org:adminr" });

  const adminRole = has({ role: "org:admin" });

  return (
    <nav className={styles.navbar}>
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

            <li>
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
    </nav>
  );
}
