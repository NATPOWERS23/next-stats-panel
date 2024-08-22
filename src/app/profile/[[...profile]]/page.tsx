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
		<div className={styles.container}>
			<UserProfile />
		</div>
	);
};

export default Profile;
