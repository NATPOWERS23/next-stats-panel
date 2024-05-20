'use client';

import { IMenuItem, menuItems } from '../../(core)/constants/menu-items';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ROLE } from '@/app/(core)/constants/ROLES';
import { useRouter } from 'next/navigation';
import { User } from '@/app/(pages)/profile/User';

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    await axios
      .get('/api/users/me')
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(`Error with getting user data: ${err}`));
  };

  return (
    <div className={styles.sidebar}>
      {user?.username && (
        <div className={styles.account}>
          <div className={styles.avatar}>
            {user.avatar && (
              <img className={styles.image} src="/images/avatar.png" alt="avatar" width={100} height={100}></img>
            )}
          </div>

          <div>{ROLE[user.role]}</div>
          <div className={styles.email}>{user.email || 'Email not found'}</div>
          <button onClick={() => router.push('/logout')}>Logout</button>
        </div>
      )}

      <h3>Menu</h3>

      {menuItems.map((item: IMenuItem) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
}
