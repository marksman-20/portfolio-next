import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  href,
  external = false,
  eyebrow,
  title,
  summary,
  image,
  tags = [],
  doc,
  caseStudy,
}) {
  const Comp = external ? 'a' : Link;
  const extra = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};
  return (
    <article className={styles.card}>
      <Comp href={href} className={styles.imageWrap} {...extra}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.image}
        />
        <span className={styles.viewBadge}>
          {external ? 'Visit live ↗' : 'Read article →'}
        </span>
      </Comp>
      <div className={styles.body}>
        <p className={`mono ${styles.eyebrow}`}>{eyebrow}</p>
        <Comp href={href} className={styles.titleLink} {...extra}>
          <h3 className={styles.title}>{title}</h3>
        </Comp>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.foot}>
          <ul className={styles.tags}>
            {tags.map((t) => (
              <li key={t} className={styles.tag}>{t}</li>
            ))}
          </ul>
          {caseStudy && (
            <Link href={caseStudy} className={`mono ${styles.caseStudyLink}`}>
              Read Case Study →
            </Link>
          )}
          {doc && (
            <span className={`mono ${styles.doc}`}>PDF · {doc}</span>
          )}
        </div>
      </div>
    </article>
  );
}
