'use client';

import Loader from '@/app/loading';
import useFetchTwitchGoals from '@/hooks/twitch/useFetchTwitchGoals';
import { useAuth } from '@/context/authContext';
import { Edge } from './goals';

export default function Goals() {
  const { authUser } = useAuth();
  const { goals, loading } = useFetchTwitchGoals(authUser);

  if (loading) return <Loader />;

  const goalsList = goals?.map((goal: Edge) => (
    <div
      className="card"
      style={{ maxWidth: '200px', borderColor: `#${goal.node.customizations.progressBarAccentColor}` }}
    >
      <div className="card-title">{goal.node.contributionType}</div>
      <div className="card-body">
        <div>{goal.node.currentContributions + '/' + goal.node.targetContributions}</div>
      </div>
    </div>
  ));

  return (
    <div className="page-wrapper">
      <h1>Goals</h1>

      <div className="card">
        <div className="card-title">Twitch</div>
        <div className="grid-wrapper">{goalsList}</div>
      </div>
      <div className="card">
        <div className="card-title">Common</div>
        <div className="grid-wrapper">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
