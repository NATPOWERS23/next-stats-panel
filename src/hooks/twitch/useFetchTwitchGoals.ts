import React, { useEffect } from 'react';

export default function useFetchTwitchGoals() {
  const [goals, setGoals] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getGoals = () => {
    setLoading(true);
    fetch('https://twitch-api8.p.rapidapi.com/get_channel_goals?channel=shadoune666', {
      headers: {
        'X-RapidAPI-Host': 'twitch-api8.p.rapidapi.com',
        'X-RapidAPI-Key': 'bf1e3394c8mshddb0a7ed51a13f0p1992dbjsndff0ca37680b',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setGoals(response.channel.goals.edges);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getGoals();
  }, []);

  return { goals, loading };
}
