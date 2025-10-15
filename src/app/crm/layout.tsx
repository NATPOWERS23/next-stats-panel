"use client";

import { Protect } from "@clerk/nextjs";

import { authenticatedRoles } from "@/constants/roles";
import { AccessDenied } from "@/components/AccessDenied/AccessDenied";
import CreateMembershipView from "@/features/crm/CreateMembershipView/CreateMembershipView";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";

export default function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasRequiredRole = (has: (arg0: { role: string }) => boolean) => authenticatedRoles.some((role) => has({ role }));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main className={`${styles.main} px-2 sm:px-8 flex justify-center items-start pt-8`}>
        <div className="w-full max-w-4xl">
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
        </div>
      </main>
    </div>
  );
}
