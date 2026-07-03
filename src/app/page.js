import styles from './page.module.css';
import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import TopicRow from './components/TopicRow';

const projects = [
  {
    href: 'https://siterisk-demo-production.up.railway.app/',
    external: true,
    eyebrow: '01 · API',
    title: 'SiteRisk.io',
    summary:
      'Bank-ready physical climate risk for Indian properties — GEV + MCMC on ERA5, GloFAS and CMIP6. Built for the lending desk, not the dashboard.',
    image: '/portfolio-next/images/siterisk.jpg?v=2',
    tags: ['Climate risk', 'ERA5', 'GloFAS', 'Railway'],
    caseStudy: '/projects/siterisk'
  },
  {
    href: 'https://kharifcast-production.up.railway.app/',
    external: true,
    eyebrow: '02 · Julia SDE',
    title: 'KharifCast',
    summary:
      'Monsoon crop advisory for agri-lenders. District-level risk scores from an OU-jump SDE ensemble, calibrated against IMD station data.',
    image: '/portfolio-next/images/kharifcast.jpg?v=2',
    tags: ['Agri-finance', 'MCMC', 'IMD', 'Railway'],
    caseStudy: '/projects/kharifcast'
  },
  {
    href: '/blog/csr-esg',
    eyebrow: '03 · Research',
    title: 'Comparative Analysis — CSR & ESG Impacts',
    summary:
      'A side-by-side study of Tata Steel Jamshedpur and Reliance Jamnagar Refinery. Spend, emissions, social footprint, governance, and what the numbers hide.',
    image: '/portfolio-next/images/extracted/bev/bev_page8_1.png?v=4',
    tags: ['CSR', 'ESG', 'Emissions', 'India industry'],
    doc: 'BEV.pdf',
  },
  {
    href: '/blog/sustainable-finance',
    eyebrow: '04 · Response paper',
    title: 'Sustainable Corporate Finance — A Second-Best Path',
    summary:
      'Why a global corporate purpose is impossible, and why green industrial policy plus climate litigation plus satellite evidence is the only path that survives contact with geopolitics.',
    image: '/portfolio-next/images/extracted/finance_page5_8.jpeg?v=4',
    tags: ['Climate litigation', 'IRA', 'CBAM', 'Earth Engine'],
    doc: '2022-5IPM-37_Manas_Pokley.pdf',
  },
];

const stats = [
  { k: '02', label: 'Years building climate systems' },
  { k: '4', label: 'Research & field projects shipped' },
  { k: '~50k', label: 'Grid cells modelled in production' },
  { k: '2', label: 'Live APIs in market' },
];

const topics = [
  { cat: 'Climate Risk', title: 'SiteRisk.io: Bank-ready physical climate risk for India', date: '03 Jul 2026', slug: 'siterisk' },
  { cat: 'Agri-finance', title: 'KharifCast: Monsoon crop advisory and SDEs for lending', date: '30 Jun 2026', slug: 'kharifcast' },
  { cat: 'ESG & CSR', title: 'Comparative Analysis of CSR & ESG Impacts', date: '18 Jun 2026', slug: 'csr-esg' },
  { cat: 'Sustainable Finance', title: 'Sustainable Corporate Finance — A Second-Best Path', date: '12 Jun 2026', slug: 'sustainable-finance' },
  { cat: 'Field Notes', title: 'Research Notes: Tracking commodity markets via spatial emission footprints', date: '14 Mar 2026', slug: 'emissions-tracking' },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={`mono ${styles.eyebrow}`}>
            <span className={styles.liveDot} /> Live · 2026
          </p>
          <h1 className={styles.title}>
            Manas Pokley<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            I build <em>climate systems that can&apos;t lie</em> — risk APIs for lenders,
            satellite-driven ESG evidence, and field-tested advisory models.
            ISI Kolkata alumnus. Currently shipping in climate-tech.
          </p>
          <div className={styles.heroCtas}>
            <Link href="#work" className="btn">See selected work</Link>
            <a href="mailto:hello@example.com" className="btn ghost">Get in touch</a>
          </div>
          <ul className={styles.statGrid}>
            {stats.map((s) => (
              <li key={s.k} className={styles.stat}>
                <span className={styles.statK}>{s.k}</span>
                <span className={styles.statL}>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>



      <section id="work" className={styles.section}>
        <div className="container">
          <header className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className={styles.h2}>Things I&apos;ve built, broken, or written up.</h2>
            </div>
            <p className={styles.sectionNote}>
              4 of 12. Each card links to a live demo, a paper, or a working API.
            </p>
          </header>

          <div className={styles.grid}>
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className="container">
          <div className={styles.about}>
            <div>
              <p className="eyebrow">About</p>
              <h2 className={styles.h2}>Climate tech, working at the seam of climate and finance.</h2>
            </div>
            <div className={styles.aboutBody}>
              <p>
                I&apos;m Manas — a business graduate from NALSAR University of Law now working in climate-tech and ag-finance. My work sits at the intersection of physical climate risk, financial accountability and on-ground agricultural data. I&apos;ve shipped production risk APIs, built credibility-weighted actuarial pipelines, and worked with agronomists on kharif crop data. I care about systems that survive contact with regulators, lenders and weather.
              </p>
              <p>
                Currently based in India. Open to research collaborations, contract work and full-time roles in climate-tech, ag-finance or product/dev tooling.
              </p>
              <ul className={styles.aboutMeta}>
                <li><span className="mono">Stack</span> Python · TypeScript · Next.js</li>
                <li><span className="mono">Data</span> IMDLIB · CHIRPS · MODIS NDVI · ICRISAT · Agmarknet · NFHS-5</li>
                <li><span className="mono">Tooling</span> PostgreSQL · FastAPI · Claude Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Topics</p>
              <h2 className={styles.h2}>Notes, drafts and field notes.</h2>
            </div>
            <Link href="/topics" className={styles.sectionLink}>
              Browse all topics →
            </Link>
          </header>
          <div className={styles.topics}>
            {topics.map((t, i) => (
              <TopicRow key={t.title} index={i} {...t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
