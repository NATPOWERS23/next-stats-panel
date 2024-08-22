import React from "react";
import { redirect } from "next/navigation";
import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

import styles from "./profile.module.css";

const Profile = async () => {
	const { userId } = auth();
	const isAuthenticated = !!userId;
	const user = await currentUser();

	if (!isAuthenticated) redirect("/client");

	return (
		<div className={styles.profile}>
			<h1>{user?.username || `${user?.firstName} ${user?.lastName}`}</h1>
			<div className="page-wrapper" style={{ display: "flex" }}>
				<UserProfile />
			</div>
		</div>
	);
};

export default Profile;
