import Sidebar from '@/components/Sidebar/Sidebar';
import styles from './layout.module.css';
import { Protect } from '@clerk/nextjs';

export default function CrmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Protect
        condition={(has) =>
          has({ role: 'org:admin' }) || has({ role: 'org:channel_owner' }) || has({ role: 'org:user' })
        }
        fallback={
          <div
            style={{
              width: '100%',
              paddingLeft: '240px',
            }}
          >
            <p>Наразі у вас немає доступу до основних функцій сайту.</p>
          </div>
        }
      >
        <main className={styles.main}>{children}</main>
      </Protect>
    </div>
  );
}
