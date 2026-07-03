import styles from './page.module.css';
import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import TopicRow from './components/TopicRow';
import VectorBreak from './components/VectorBreak';

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
  },
  {
    href: 'https://frontend-chi-fawn-24.vercel.app/',
    external: true,
    eyebrow: '02 · Julia SDE',
    title: 'KharifCast',
    summary:
      'Monsoon crop advisory for agri-lenders. District-level risk scores from an OU-jump SDE ensemble, calibrated against IMD station data.',
    image: '/portfolio-next/images/kharifcast.jpg?v=2',
    tags: ['Agri-finance', 'MCMC', 'IMD', 'Vercel'],
  },
  {
    href: '/blog/csr-esg',
    eyebrow: '03 · Research',
    title: 'Comparative Analysis — CSR & ESG Impacts',
    summary:
      'A side-by-side study of Tata Steel Jamshedpur and Reliance Jamnagar Refinery. Spend, emissions, social footprint, governance, and what the numbers hide.',
    image: '/portfolio-next/images/illustrations/csr-hero.svg?v=2',
    tags: ['CSR', 'ESG', 'Emissions', 'India industry'],
    doc: 'BEV.pdf',
  },
  {
    href: '/blog/sustainable-finance',
    eyebrow: '04 · Response paper',
    title: 'Sustainable Corporate Finance — A Second-Best Path',
    summary:
      'Why a global corporate purpose is impossible, and why green industrial policy plus climate litigation plus satellite evidence is the only path that survives contact with geopolitics.',
    image: '/portfolio-next/images/illustrations/sf-hero.svg?v=2',
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
  { cat: 'Climate & Energy', title: 'Bank-ready physical climate risk for India', date: '03 Jul 2026' },
  { cat: 'Climate & Energy', title: 'S2S weather prediction and monsoon risk', date: '30 Jun 2026' },
  { cat: 'Sustainable Finance', title: 'Second-best paths to corporate sustainability', date: '12 Jun 2026' },
  { cat: 'Agri-finance', title: 'OU-jump SDEs for crop-stress lending signals', date: '02 Jun 2026' },
  { cat: 'Satellite & Earth Obs.', title: 'What a Jamshedpur night-light trend really says', date: '18 May 2026' },
  { cat: 'Policy', title: "India's green hydrogen mission — a status check", date: '04 May 2026' },
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

      <VectorBreak />

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
                I&apos;m Manas — a statistics graduate from ISI Kolkata now working in
                climate-tech. My work sits at the intersection of physical climate
                modelling, financial accountability and on-ground data. I&apos;ve shipped
                production risk APIs, written sustainable-finance papers, and walked
                kharif fields with agronomists. I care about systems that survive
                contact with regulators, lenders and weather.
              </p>
              <p>
                Currently based in India. Open to research collaborations, contract
                work and full-time roles in climate-tech, ag-finance or Earth-observation
                infrastructure.
              </p>
              <ul className={styles.aboutMeta}>
                <li><span className="mono">Stack</span> Python · Julia · TypeScript · Next.js</li>
                <li><span className="mono">Data</span> ERA5 · GloFAS · CMIP6 · IMD · Sentinel-2</li>
                <li><span className="mono">Tooling</span> Google Earth Engine · PostgreSQL · FastAPI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <VectorBreak />

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
