import styles from './loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.tile01}>
        <div className={styles.mask}>AquaTrack</div>
      </div>
    </div>
  );
}
