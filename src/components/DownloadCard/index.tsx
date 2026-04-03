import clsx from 'clsx';
import styles from './styles.module.css';

type DownloadCardProps = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  meta?: string;
  fullWidth?: boolean;
};

export default function DownloadCard({
  href,
  title,
  description,
  badge = '下载',
  meta = 'Windows',
  fullWidth = false,
}: DownloadCardProps): JSX.Element {
  return (
    <a
      className={clsx(styles.card, fullWidth && styles.fullWidth)}
      href={href}
      target="_blank"
      rel="noreferrer">
      <div className={styles.topRow}>
        <span className={styles.badge}>{badge}</span>
        <span className={styles.meta}>{meta}</span>
      </div>
      <div className={styles.main}>
        <div className={styles.iconWrap} aria-hidden="true">
          <span className={styles.icon}>↓</span>
        </div>
        <div className={styles.content}>
          <strong className={styles.title}>{title}</strong>
          <span className={styles.description}>{description}</span>
        </div>
        <span className={styles.action}>
          立即下载
          <span className={styles.arrow}>→</span>
        </span>
      </div>
    </a>
  );
}
