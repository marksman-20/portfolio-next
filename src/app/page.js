import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Manas Pokley
        </div>
        <div className={styles.navLinks}>
          <a href="#work">Selected Work</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Portfolio & Research</span>
            <h1 className={`${styles.heroTitle} display text-7xl`}>
              Engineering sustainable systems.
            </h1>
            <p className={styles.heroSubtitle}>
              Bridging the gap between environmental accountability, robust engineering, and financial sustainability. I build systems to analyze climate risk and drive ESG impact.
            </p>
          </div>
        </section>

        <section id="work" className={styles.catalogSection}>
          <h2 className={`${styles.sectionHeader} display`}>Featured Projects</h2>
          <div className={styles.grid}>
            
            {/* SiteRisk */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/siterisk.jpg" alt="SiteRisk" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>API</span>
                  <span className={styles.tag}>Climate Risk</span>
                </div>
                <h3 className={`${styles.cardTitle} display`}>SiteRisk.io</h3>
                <p className={styles.cardDescription}>Transactional API for physical climate risk assessments across India using Copernicus CDS data.</p>
              </div>
              <div className={styles.cardFooter}>
                <a href="https://siterisk-demo-production.up.railway.app/" target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  Visit Project →
                </a>
              </div>
            </div>

            {/* KharifCast */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/kharifcast.jpg" alt="KharifCast" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Julia SDE</span>
                  <span className={styles.tag}>Agri-Tech</span>
                </div>
                <h3 className={`${styles.cardTitle} display`}>KharifCast</h3>
                <p className={styles.cardDescription}>Monsoon crop advisory model for lenders. District-level risk scores powered by IMD rainfall data.</p>
              </div>
              <div className={styles.cardFooter}>
                <a href="https://frontend-chi-fawn-24.vercel.app/" target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  Visit Project →
                </a>
              </div>
            </div>

            {/* CSR vs ESG Blog */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/csr.jpg" alt="CSR vs ESG" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Research</span>
                  <span className={styles.tag}>ESG</span>
                </div>
                <h3 className={`${styles.cardTitle} display`}>CSR vs ESG Impacts</h3>
                <p className={styles.cardDescription}>Comparative analysis of Tata Steel and Reliance Jamnagar. Evaluates emissions and social impact.</p>
              </div>
              <div className={styles.cardFooter}>
                <Link href="/blog/csr-esg" className={styles.linkBtn}>
                  Read Article →
                </Link>
              </div>
            </div>

            {/* Sustainable Finance Blog */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/finance.jpg" alt="Corporate Finance" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Satellite</span>
                  <span className={styles.tag}>Policy</span>
                </div>
                <h3 className={`${styles.cardTitle} display`}>Sustainable Corporate Finance</h3>
                <p className={styles.cardDescription}>Response paper exploring green industrial policies, climate litigation, and Google Earth Engine satellite accountability.</p>
              </div>
              <div className={styles.cardFooter}>
                <Link href="/blog/sustainable-finance" className={styles.linkBtn}>
                  Read Article →
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; 2026 Manas Pokley. Built with Next.js.</p>
      </footer>
    </div>
  );
}
