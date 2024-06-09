import styles from './contracts.module.css';

export default function Contracts() {
  const contracts = [
    { id: 1, name: 'Contract 1', status: 'active', context: 'Charity Saturday 12/12 14:00' },
    { id: 2, name: 'Contract 2', status: 'inactive' },
    { id: 3, name: 'Contract 3', status: 'active' },
    { id: 4, name: 'Contract 4' },
    { id: 5, name: 'Contract 5' },
    { id: 6, name: 'Contract 6' },
  ];

  const contractsList = contracts.map((contract) => {
    return (
      <li className="card" key={contract.id}>
        <div className="card-title">
          <a href={`/contracts/${contract.id}`}>{contract.name}</a>
          <div className={styles.status}>{contract.status}</div>
        </div>
        <div className="card-body">{contract.context || ''}</div>
      </li>
    );
  });

  return (
    <div className="page-wrapper">
      <h1>Contracts</h1>

      <ul className="card-list">{contractsList}</ul>
    </div>
  );
}
