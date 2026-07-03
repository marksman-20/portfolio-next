import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)">
             <path d="M12 2L2 22h20L12 2zm0 3.8l7.2 14.2H4.8L12 5.8z"/>
          </svg>
          Manas Pokley
        </div>
        <div className={styles.navLinks}>
          <a href="#datasets">Datasets & Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Sustainable Finance & Climate Tech Data</h1>
            <p className={styles.heroSubtitle}>
              A planetary-scale catalog of climate risk assessments, agricultural advisory algorithms, and environmental corporate accountability research.
            </p>
            <div className={styles.searchBar}>
              <svg width="20" height="20" fill="var(--text-secondary)" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input type="text" className={styles.searchInput} placeholder="Search datasets and projects..." />
            </div>
          </div>
        </section>

        <section id="datasets" className={styles.catalogSection}>
          <h2 className={styles.sectionHeader}>Featured Data Catalogs</h2>
          <div className={styles.grid}>
            
            <a href="#" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/siterisk.jpg" alt="SiteRisk" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>API</span>
                  <span className={styles.tag}>Climate Risk</span>
                </div>
                <h3 className={styles.cardTitle}>SiteRisk.io</h3>
                <p className={styles.cardDescription}>Transactional API for physical climate risk assessments across India using Copernicus CDS data.</p>
                <div className={styles.cardFooter}>
                  <span className={styles.linkBtn}>Internal Access</span>
                </div>
              </div>
            </a>

            <a href="#" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/kharifcast.jpg" alt="KharifCast" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Julia SDE</span>
                  <span className={styles.tag}>Agri-Tech</span>
                </div>
                <h3 className={styles.cardTitle}>KharifCast</h3>
                <p className={styles.cardDescription}>Monsoon crop advisory model for lenders. District-level risk scores powered by IMD rainfall data.</p>
                <div className={styles.cardFooter}>
                  <span className={styles.linkBtn}>Internal Access</span>
                </div>
              </div>
            </a>

            <a href="/assets/BEV.pdf" target="_blank" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/csr.jpg" alt="CSR vs ESG" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Research</span>
                  <span className={styles.tag}>ESG</span>
                </div>
                <h3 className={styles.cardTitle}>CSR vs ESG Impacts</h3>
                <p className={styles.cardDescription}>Comparative analysis of Tata Steel and Reliance Jamnagar. Evaluates emissions and social impact.</p>
                <div className={styles.cardFooter}>
                  <span className={styles.linkBtn}>View Document</span>
                </div>
              </div>
            </a>

            <a href="/assets/2022-5IPM-37.pdf" target="_blank" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image src="/images/finance.jpg" alt="Corporate Finance" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Satellite</span>
                  <span className={styles.tag}>Policy</span>
                </div>
                <h3 className={styles.cardTitle}>Sustainable Finance</h3>
                <p className={styles.cardDescription}>Response paper exploring green industrial policies, climate litigation, and GEE satellite accountability.</p>
                <div className={styles.cardFooter}>
                  <span className={styles.linkBtn}>View Document</span>
                </div>
              </div>
            </a>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; 2026 Manas Pokley. Built with Next.js for Vercel.</p>
      </footer>
    </div>
  );
}
