import Link from 'next/link';
import styles from './TopicRow.module.css';

export default function TopicRow({ index, cat, title, date, slug }) {
  return (
    <Link href={`/blog/${slug}`} className={styles.row}>
      <span className={styles.idx}>{String(index + 1).padStart(2, '0')}</span>
      <span className={styles.cat}>{cat}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.date}>{date}</span>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
