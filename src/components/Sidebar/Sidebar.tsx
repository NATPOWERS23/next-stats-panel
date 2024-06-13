'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import { ROLE } from '@/constants/ROLES';
import { IMenuItem, menuItems } from '../../constants/menu-items';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import useLogOut from '../../app/(pages)/logout/useLogOut';

export default function Sidebar() {
  const router = useRouter();
  const { authUser, setAuthUser } = useAuth();

  const { logoutUser } = useLogOut();

  useEffect(() => {
    !authUser && getUserDetails();
  }, []);

  const getUserDetails = async () => {
    await axios
      .get('/api/users/me')
      .then((res) => {
        setAuthUser(res.data.data.user);
      })
      .catch((err) => {
        logoutUser();
        console.log(`Error with getting user data: ${err}`);
      });
  };

  return (
    <div className={styles.sidebar}>
      {authUser?.username && (
        <>
          <div className={styles.account} onClick={() => router.push('/profile')}>
            <div className={styles.avatar}>
              {authUser.avatar && (
                <Image className={styles.image} src={authUser.avatar} alt="avatar" width={100} height={100}></Image>
              )}
            </div>

            <div>{ROLE[authUser.role]}</div>
            <div className={styles.email}>{authUser.email || 'Email not found'}</div>
          </div>

          <div className={styles.menu}>
            <h3>Menu</h3>

            {menuItems.map((item: IMenuItem) => (
              <MenuItem item={item} key={item.id} />
            ))}
          </div>

          <button onClick={() => router.push('/logout')}>Logout</button>
        </>
      )}
    </div>
  );
}
