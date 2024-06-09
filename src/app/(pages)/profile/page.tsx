'use client';

import { ROLE } from '@/app/(core)/constants/ROLES';
import axios from 'axios';
import { useState } from 'react';
import { User } from './User';

export default function ProfilePage() {
  const [user, setUser] = useState({} as User);

  const getUserDetails = async () => {
    await axios
      .get('/api/users/me')
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(`Error with getting user data: ${err}`));
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {user ? (
          <>
            <p>{user.username && `Username: ${user.username}`}</p>
            <p>{user.role && `User Role: ${ROLE[user.role].replaceAll('_', ' ')}`}</p>
          </>
        ) : (
          <h2>No user information. Please toggle &quot;Details&quot;</h2>
        )}
      </div>
      <button onClick={getUserDetails}>Details</button>
    </div>
  );
}
