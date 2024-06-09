'use client';

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import CustomLoader from '@/components/CustomLoader/CustomLoader';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const { setAuthUser } = useAuth();

  const onLogin = async () => {
    try {
      setLoading(true);
      axios.post('/api/users/login', user).then((res) => {
        const { user } = res.data.data;
        setAuthUser({ ...user });
        router.push('/');
      });
    } catch (error: any) {
      console.log('Login failed', error.message);
      setLoading(false);
    } finally {
      console.log('Login process finished.');
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
