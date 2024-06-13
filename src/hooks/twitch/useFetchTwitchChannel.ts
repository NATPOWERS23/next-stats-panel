import React, { useEffect } from 'react';

import { User } from '@/app/(pages)/profile/User';
import { ChannelData } from '@/app/(pages)/profile/page';

export default function useFetchTwitchChannel(authUser: User) {
  const [channel, setChannel] = React.useState({} as ChannelData);
  const [loading, setLoading] = React.useState(false);

  const getChannel = () => {
    setLoading(true);
    fetch('https://twitch-api8.p.rapidapi.com/get_streamer_info?channel=xqc', {
      headers: {
        'X-RapidAPI-Host': 'twitch-api8.p.rapidapi.com',
        'X-RapidAPI-Key': 'bf1e3394c8mshddb0a7ed51a13f0p1992dbjsndff0ca37680b',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setChannel(response.channel);
      })
      .catch((err) => console.log(`Error with getting channel owner data: ${err}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (authUser) getChannel();
  }, [authUser]);

  return { channel, loading };
}
