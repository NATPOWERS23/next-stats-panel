import styles from './collaborations.module.css';

export default function Collaborations() {
  const collabs = [
    { brand: 'Brand 1', id: '1', title: 'Title 1' },
    { brand: 'Brand 2', id: '2', title: 'Title 2' },
    { brand: 'Brand 3', id: '3', title: 'Title 3' },
    { brand: 'Brand 4', id: '4', title: 'Title 4' },
    { brand: 'Brand 5', id: '5', title: 'Title 5' },
  ];

  const collabsList = collabs.map((collab) => (
    <div className="card" key={collab.id}>
      <div className="card-title">{collab.title}</div>
      <div className="card-body">{collab.brand}</div>
    </div>
  ));

  return (
    <div className="page-wrapper">
      <h1>Collaborations</h1>

      <div className="grid-wrapper">{collabsList}</div>
    </div>
  );
}
