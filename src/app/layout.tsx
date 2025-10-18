import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

import CustomLoader from "@/components/CustomLoader/CustomLoader";
import ClientProviders from "@/components/ClientProviders";
import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClerkProvider
          appearance={{
            baseTheme: [dark, neobrutalism],
            variables: { colorPrimary: "#1d9a56" },
          }}
        >
          <ClerkLoading>
            <CustomLoader />
          </ClerkLoading>
          <ClerkLoaded>
            <Navbar />
            <ClientProviders>
              {children}
            </ClientProviders>
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
