import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import "../styles/globals.css";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import Navbar from "@/components/Navbar/Navbar";

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
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<ClerkLoading>
						<CustomLoader />
					</ClerkLoading>
					<ClerkLoaded>
						<Navbar />
						{children}
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
