import styles from '../projects/project.module.css';

export default function ProjectDocShell({
  liveLabel = 'Live',
  title,
  lede,
  meta = [],
  actions = [],
  sections = [],
  endpoints = [],
  stack = [],
  sideLinks = [],
  children,
}) {
  return (
    <div className="container">
      <div className={styles.doc}>
        <aside className={styles.side} aria-label="Project navigation">
          <p className={styles.sideTitle}>On this page</p>
          {sideLinks.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
        </aside>
        <div className={styles.main}>
          <span className={styles.live}>
            <span /> {liveLabel}
          </span>
          <h1 className={styles.h1}>{title}</h1>
          <p className={styles.lede}>{lede}</p>
          <div className={styles.metaRow}>
            {meta.map((m) => (
              <span key={m.label}><strong>{m.value}</strong> · {m.label}</span>
            ))}
          </div>
          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((a) => (
                <a key={a.href} href={a.href} target={a.external ? '_blank' : undefined} rel={a.external ? 'noreferrer' : undefined} className="btn">
                  {a.label} {a.external ? '↗' : ''}
                </a>
              ))}
            </div>
          )}
          {stack.length > 0 && (
            <div className={styles.stack}>
              {stack.map((s) => (
                <div key={s.k} className={styles.stackItem}>
                  <p className={styles.stackK}>{s.k}</p>
                  <p className={styles.stackV}>{s.v}</p>
                </div>
              ))}
            </div>
          )}
          {endpoints.length > 0 && (
            <div>
              {endpoints.map((e) => (
                <div key={e.path} className={styles.endpoint}>
                  <span className={`${styles.method} ${e.method === 'GET' ? styles.methodGet : styles.methodPost}`}>{e.method}</span>
                  <div>
                    <div className={styles.epPath}>{e.path}</div>
                    <div className={styles.epDesc}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {children}
          <div className={styles.sections}>
            {sections.map((s) => (
              <section key={s.id} id={s.id} className={styles.section}>
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
