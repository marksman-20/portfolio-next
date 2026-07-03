import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';

export default function BlogShell({
  crumbs = [],
  tags = [],
  title,
  lede,
  meta = [],
  hero,
  toc = [],
  children,
  doc,
  docLabel = 'Download PDF',
}) {
  return (
    <article className={styles.post}>
      <div className="container">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/topics">Topics</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span>/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>

        <header className={styles.hero}>
          <ul className={styles.tags}>
            {tags.map((t) => (
              <li key={t} className={styles.tag}>{t}</li>
            ))}
          </ul>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lede}>{lede}</p>
          <div className={styles.meta}>
            {meta.map((m) => (
              <span key={m.label}><strong>{m.value}</strong> · {m.label}</span>
            ))}
          </div>
        </header>

        {hero && (
          <figure className={styles.heroFigure}>
            <Image
              src={hero}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              priority
            />
          </figure>
        )}

        <div className={styles.layout}>
          {toc.length > 0 && (
            <aside className={styles.toc} aria-label="Table of contents">
              <p className={styles.tocTitle}>In this paper</p>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`}>{t.label}</a>
              ))}
            </aside>
          )}
          <div className={styles.body}>{children}</div>
        </div>

        {doc && (
          <section className={styles.download}>
            <div>
              <h3 className={styles.downloadTitle}>Read the full report</h3>
              <p className={styles.downloadBody}>
                Download the complete PDF — full source citations, source tables, and the original 13-page report with appendices.
              </p>
            </div>
            <a
              href={doc}
              target="_blank"
              rel="noreferrer"
              className={styles.downloadBtn}
            >
              {docLabel} ↗
            </a>
          </section>
        )}
      </div>
    </article>
  );
}
