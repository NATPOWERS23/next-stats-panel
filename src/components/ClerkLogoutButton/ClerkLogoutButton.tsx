"use client";

import { useClerk } from "@clerk/nextjs";
import Button from "../Button/Button";

export default function ClerkUserButoon() {
	const { signOut, user } = useClerk();

	const handleSignOut = () => {
		localStorage.clear();
		signOut({ redirectUrl: "/" });
	};

	return <>{user && <Button content="Sign out" onClick={handleSignOut} />}</>;
}
