'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const logout = () => {
    axios
      .get('/api/users/logout')
      .then(() => router.push('/login'))
      .catch((err) => console.log('Error with logout process: ' + err));
  };

  return (
    <div className="page-wrapper">
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
