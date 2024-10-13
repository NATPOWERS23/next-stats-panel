import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import "../styles/globals.css";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import Navbar from "@/components/Navbar/Navbar";
import Modal from "@/components/Modal/Modal";
import { dark, neobrutalism } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

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
				<body className={inter.className}>
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
