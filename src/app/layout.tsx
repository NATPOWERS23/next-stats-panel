import type { Metadata } from "next";
import localFont from "next/font/local";
import { dark, neobrutalism } from "@clerk/themes";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import Navbar from "@/components/Navbar/Navbar";
import Modal from "@/components/Modal/Modal";

import "../styles/globals.css";

const mainFont = localFont({
	src: "../../public/assets/fonts/CoFoSans-Regular.woff2",
});

export const metadata: Metadata = {
	title: "Stats App",
	description: "Description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: [dark, neobrutalism],
				variables: { colorPrimary: "#1d9a56" },
			}}
		>
			<html lang="en">
				<body className={mainFont.className}>
					<ClerkLoading>
						<CustomLoader />
					</ClerkLoading>
					<ClerkLoaded>
						<Navbar />
						{children}
						<Modal />
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
