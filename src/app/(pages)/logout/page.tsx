'use client';

import useLogOut from './useLogOut';
import CustomLoader from '@/components/CustomLoader/CustomLoader';

export default function Logout() {
  const { logoutUser, loading } = useLogOut();

  return (
    <div className="page-wrapper">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <h1>Logout</h1>
          <button onClick={logoutUser}>Logout</button>
        </>
      )}
    </div>
  );
}
