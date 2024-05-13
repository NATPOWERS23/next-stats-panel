import styles from './InfoBox.module.css';

export default function InfoBox({ title, numbers }: { title: string; numbers: number }) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.numbers}>
          {numbers} <span className={styles.currency}>USD</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
