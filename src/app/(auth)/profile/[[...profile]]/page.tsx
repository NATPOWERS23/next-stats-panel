import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import UserInfoBar from "./components/UserInfoBar/UserInfoBar";
import Icon from "@/components/Icon/Icon";
import styles from "./profile.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";

const Profile = () => {
	const { userId } = auth();
	const isAuthenticated = !!userId;

	if (!isAuthenticated) redirect("/client");

	return (
		<>
			<LinkButton content="Back" iconName="arrow_left" href="/crm" />
			<div className={styles.container}>
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
