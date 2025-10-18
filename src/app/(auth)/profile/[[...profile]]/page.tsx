import React from "react";
import { redirect } from "next/navigation";
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import LinkButton from "@/components/LinkButton/LinkButton";
import UserInfoBar from "./components/UserInfoBar/UserInfoBar";
import styles from "./profile.module.css";

const Profile = async () => {
  const { userId } = await auth();
  const isAuthenticated = !!userId;

  if (!isAuthenticated) redirect("/client");

  return (
    <>
      <LinkButton content="Back" iconName="arrow_left" href="/crm" />
      <div className="container mx-auto lg:px-20 lg:py-10 flex flex-wrap flex-row-reverse align-middle justify-center gap-10">
        <UserInfoBar />
        <UserProfile
          appearance={{
            elements: {
              cardBox: styles.userProfileCard,
            },
          }}
        />
      </div>
    </>
  );
};

export default Profile;
