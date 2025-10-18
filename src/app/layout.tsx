import type { Metadata } from "next";
import localFont from "next/font/local";
import { dark, neobrutalism } from "@clerk/themes";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import ClientProviders from "@/components/ClientProviders";
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
    <html lang="en" suppressHydrationWarning>
      <body className={mainFont.className} suppressHydrationWarning>
        <ClerkProvider
          appearance={{
            baseTheme: [dark, neobrutalism],
            variables: {
              colorPrimary: "var(--green)",
              colorText: "var(--white)",
            },
            elements: {
              socialButtonsBlockButton: {
                color: "var(--white)",
              },
              socialButtonsBlockButtonText: {
                color: "var(--white)",
              },
            },
          }}
        >
          <ClerkLoading>
            <CustomLoader />
          </ClerkLoading>
          <ClerkLoaded>
            <Navbar />
            <ClientProviders>
              {children}
              <Modal />
            </ClientProviders>
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
