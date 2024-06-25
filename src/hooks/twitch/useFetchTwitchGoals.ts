import React, { useEffect } from 'react';
import { ROLE } from '@/constants/ROLES';
import { User } from '@/app/(pages)/profile/User';

export default function useFetchTwitchGoals(authUser: User) {
  const [goals, setGoals] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getGoals = () => {
    setLoading(true);
    // todo: add request
  };

  useEffect(() => {
    console.log(authUser);
    authUser?.role === ROLE.CHANNEL_OWNER && getGoals();
  }, [authUser]);

  return { goals, loading };
}
