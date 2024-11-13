"use client";

import { useClerk } from "@clerk/nextjs";

export default function ClerkUserButoon() {
	const { signOut } = useClerk();

	const handleSignOut = () => {
		localStorage.clear();
		signOut({ redirectUrl: "/" });
	};

	return (
		<button type="button" onClick={handleSignOut}>
			Sign out
		</button>
	);
}
