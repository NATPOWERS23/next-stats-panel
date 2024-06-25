'use client';

import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import CustomLoader from '@/components/CustomLoader/CustomLoader';
import { ROLE } from '@/constants/ROLES';
import { twitchAuthPath } from './twitch.config';

export default function SignupPage() {
  const router = useRouter();
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      axios.post('/api/users/login', user).then((res) => {
        const { user, twitch } = res.data.data;

        setAuthUser({ ...user, twitch: twitch ? twitch : null });

        if (user.role === ROLE.CHANNEL_OWNER) {
          window.location.href = twitchAuthPath;
        } else {
          router.push('/');
        }
      });
    } catch (error: any) {
      setLoading(false);
      console.log('Login failed.', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <h1>Login</h1>

          <div className="form-wrapper">
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
            <button onClick={onLogin}>Login</button>
            <Link href="/signup">Visit signup page</Link>
          </div>
        </>
      )}
    </div>
  );
}
