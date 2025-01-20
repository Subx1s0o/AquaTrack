import { cn } from '@/utils/cn';

import styles from './loader.module.css';

export default function Loader({ className }: { className?: string }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.tile01}>
        <div className={cn(styles.mask, className)}>AquaTrack</div>
      </div>
    </div>
  );
}
