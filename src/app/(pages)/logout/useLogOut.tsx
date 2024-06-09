import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function useLogOut() {
  const { setAuthUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const logoutUser = () => {
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

  return { logoutUser, loading };
}
