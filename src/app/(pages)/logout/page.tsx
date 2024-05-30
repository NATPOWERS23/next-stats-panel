'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import React from 'react';
import CustomLoader from '@/app/components/CustomLoader/CustomLoader';

export default function Logout() {
  const router = useRouter();
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const logout = () => {
    setLoading(true);
    axios
      .get('/api/users/logout')
      .then(() => {
        setAuthUser(null);
        setLoading(false);
        router.push('/login');
      })
      .catch((err) => console.log('Error with logout process: ' + err));
  };

  return (
    <div className="page-wrapper">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <h1>Logout</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}
