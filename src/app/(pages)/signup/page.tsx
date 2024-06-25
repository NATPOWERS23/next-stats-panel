'use client';

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROLE } from '@/constants/ROLES';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
    role: ROLE.CLIENT,
    twitchAccountId: '',
  });

  const onSignup = async () => {
    try {
      const response = await axios.post('/api/users/signup', user);
      router.push('/login');
    } catch (error: any) {
      console.log('Signup failed.', error.message);
    }
  };

  return (
    <div className="page-wrapper">
      <h1>Signup</h1>
      <div className="form-wrapper">
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
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
        <label htmlFor="role">role</label>
        <select id="role" value={user.role} onChange={(e) => setUser({ ...user, role: +e.target.value })}>
          <option value={ROLE.CLIENT}>client</option>
          <option value={ROLE.ADMIN}>admin</option>
          <option value={ROLE.CHANNEL_OWNER}>channel owner</option>
          <option value={ROLE.MANAGER}>manager</option>
        </select>
        <label htmlFor="twitchAccountId">twitch account ID</label>
        <input
          id="twitchAccountId"
          type="text"
          value={user.twitchAccountId}
          onChange={(e) => setUser({ ...user, twitchAccountId: e.target.value })}
          placeholder="twitch account ID"
        />
        <button onClick={onSignup}>Sign Up</button>

        <Link href="/login">Visit login page</Link>
      </div>
    </div>
  );
}
