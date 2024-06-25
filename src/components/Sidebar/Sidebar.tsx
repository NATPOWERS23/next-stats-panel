'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ROLE } from '@/constants/ROLES';
import { useAuth } from '@/context/authContext';
import { IMenuItem, menuItems } from '@/constants/menu-items';
import useLogOut from '@/app/(pages)/logout/useLogOut';
import reqAxios from '@/app/api/reqAxiosInterceptor';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const router = useRouter();
  const { logoutUser } = useLogOut();
  const { authUser, setAuthUser } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams?.get('code') || undefined;

  useEffect(() => {
    !authUser && getUserDetails();
  }, []);

  const getUserDetails = async () => {
    await reqAxios
      .get('/api/users/me', { params: { code } })
      .then((res) => {
        const { user } = res.data.data;
        setAuthUser({ ...user });
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
