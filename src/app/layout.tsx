import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import styles from './layout.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import { AuthProvider } from '@/context/authContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stats App',
  description: 'Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <AuthProvider>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
