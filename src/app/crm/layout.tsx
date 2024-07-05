import Sidebar from '@/components/Sidebar/Sidebar';
import styles from './layout.module.css';

export default function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
