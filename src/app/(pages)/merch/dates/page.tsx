import styles from './dates.module.css';

export default function Dates() {
  const releases = [
    { brand: 'Brand 1', id: '1', title: 'Title 1', date: '2022-01-01' },
    { brand: 'Brand 2', id: '2', title: 'Title 2', date: '2022-02-02' },
    { brand: 'Brand 3', id: '3', title: 'Title 3', date: '2022-03-03' },
    { brand: 'Brand 4', id: '4', title: 'Title 4', date: '2022-04-04' },
    { brand: 'Brand 5', id: '5', title: 'Title 5', date: '2022-05-05' },
    { brand: 'Brand 6', id: '6', title: 'Title 6', date: '2022-06-06' },
  ];

  const releasesList = releases.map((release) => (
    <div className={styles.release + ' card'} key={release.id}>
      <div className="card-title">{release.date}</div>
      <div className="card-body">
        <div>{release.title}</div>
        {release.brand}
      </div>
    </div>
  ));

  return (
    <div className="page-wrapper">
      <h1>Dates of Releases</h1>

      <div className={styles.releases}>{releasesList}</div>
    </div>
  );
}
