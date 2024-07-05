import styles from './CustomLoader.module.css';

export default function CustomLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
}
