import InfoBox from '@/components/InfoBox/InfoBox';

export default function VideosStatistic() {
  const statCards = [
    { id: '1', title: 'Stream Duration', numbers: 120001, diff: 100 },
    { id: '2', title: 'Avarage Viewers', numbers: 120001, diff: 100 },
    { id: '3', title: 'Max Viewers', numbers: 120001, diff: 100 },
    { id: '4', title: 'Unique Viewers', numbers: 120001, diff: 100 },
    { id: '5', title: 'Unique Chatters', numbers: 120001, diff: 100 },
    { id: '6', title: 'Live Views', numbers: 120001, diff: 100 },
    { id: '7', title: 'Followers', numbers: 120001, diff: 100 },
    { id: '8', title: 'New subscribers', numbers: 120001, diff: 100 },
  ];
  
  const description = ' from last stream';

  return (
    <div className="page-wrapper">
      <h1>Videos Statistic</h1>

      <div className="card danger-card">
        <div className="card-title">Top Clip of the Channel</div>
        <div className="card-body">Patch Notes Episode 13: November 2024</div>
      </div>

      <div className="grid-wrapper">
        {statCards.map((card) => (
          <InfoBox
            key={card.id}
            title={card.title}
            numbers={card.numbers}
            description={String(card.diff) + description}
          />
        ))}
      </div>
    </div>
  );
}
