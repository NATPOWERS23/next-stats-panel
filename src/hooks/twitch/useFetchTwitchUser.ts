import React, { useEffect } from 'react';
import reqAxios from '@/app/api/reqAxiosInterceptor';
import { TwitchUserData, User } from '@/app/(pages)/profile/User';

export default function useFetchTwitchUser(authUser: User) {
  const [channel, setChannel] = React.useState({} as TwitchUserData);
  const [loading, setLoading] = React.useState(false);

  const getUser = async () => {
    setLoading(true);
    const twitchUserId = authUser.twitchAccountId;
    await reqAxios
      .get(`/api/twitch/user?id=${twitchUserId}`)
      .then((response) => {
        setChannel(response.data.data[0]);
      })
      .catch((err) => console.log(`Error with getting channel owner data: ${err}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (authUser) getUser();
  }, [authUser]);

  return { channel, loading };
}
