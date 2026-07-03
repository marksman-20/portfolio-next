import Link from 'next/link';
import styles from './Footer.module.css';

const groups = [
  {
    title: 'Projects',
    items: [
      { label: 'SiteRisk.io', href: 'https://siterisk-demo-production.up.railway.app/' },
      { label: 'KharifCast', href: 'https://kharifcast-production.up.railway.app/' },
      { label: 'CSR vs ESG study', href: '/blog/csr-esg' },
      { label: 'Sustainable finance paper', href: '/blog/sustainable-finance' },
    ],
  },
  {
    title: 'Library',
    items: [
      { label: 'All topics', href: '/topics' },
      { label: 'Climate & energy', href: '/topics?cat=Climate+%26+Energy' },
      { label: 'Sustainable finance', href: '/topics?cat=Climate+%26+Energy&q=finance' },
    ],
  },
  {
    title: 'Elsewhere',
    items: [
      { label: 'GitHub', href: 'https://github.com/marksman-20' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manas-pokley/' },
      { label: 'Twitter', href: 'https://twitter.com/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.lead}>
            <p className="mono">Colophon</p>
            <h2 className={styles.leadTitle}>
              Building climate systems that can&apos;t lie.
            </h2>
            <p className={styles.leadBody}>
              Climate tech, working at the seam of climate and finance.
              Available for research collaborations, contract work and 
              full-time roles in climate-tech or ag-finance.
            </p>
            <Link href="mailto:hello@example.com" className={styles.cta}>
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className={styles.cols}>
            {groups.map((g) => (
              <div key={g.title} className={styles.col}>
                <p className={`mono ${styles.colTitle}`}>{g.title}</p>
                <ul className={styles.list}>
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} className={styles.item}>
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <span className="mono">© 2026 Manas Pokley · est. 2022</span>
          <span className="mono">Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
