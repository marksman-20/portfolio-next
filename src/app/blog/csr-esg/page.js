import styles from '../../blog.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CSRESGBlog() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>← Back to Projects</Link>
      
      <header className={styles.header}>
        <h1 className={`${styles.title} display`}>Comparative Analysis of CSR and ESG Impacts</h1>
        <div className={styles.meta}>
          <span>Manas Pokley & Suyash Gaikwad</span>
          <span>DoMS, NALSAR</span>
        </div>
      </header>

      <div className={styles.content}>
        <p>
          This research compares the Corporate Social Responsibility (CSR) and Environmental, Social, and Governance (ESG) initiatives of Tata Steel Jamshedpur and Reliance Jamnagar Refinery. We examine CSR expenditure, local community impacts, environmental performance (Scope 1, 2, 3 emissions), social contributions to education and health, and how governance board composition influences CSR.
        </p>

        <Image src="/images/extracted/csr_page8_1.png" alt="Industrial Plant Satellite View" width={800} height={400} className={styles.heroImage} />

        <h2 className="display">CSR Spend Comparison</h2>
        <p>
          Both Tata Steel Jamshedpur and Reliance Jamnagar allocate significant funds to CSR. Tata Steel spent Rs. 481 crore in FY 2022-23, with efforts strongly concentrated around Jamshedpur. This represented an 18.49% increase from the previous year.
        </p>
        <p>
          Meanwhile, Reliance spent an impressive Rs. 1,592 crore in FY 2023-24, heavily impacting Jamnagar communities through education, health initiatives, and the massive Vantara project.
        </p>

        <h2 className="display">Environmental Impact (E)</h2>
        <p>
          Emissions reduction is a critical component of both companies&apos; ESG profiles:
        </p>
        <ul>
          <li><strong>Tata Steel Jamshedpur:</strong> Estimated Scope 1 and 2 emissions are around 24.3 million tons CO2, actively mitigated by initiatives like biochar use which reduces carbon emissions by over 50,000 tons annually.</li>
          <li><strong>Reliance Jamnagar:</strong> Emitted 32.38 million tons CO2e in 2022. Their strategy involves immense green energy projects, including investments in four giga-factories for green hydrogen.</li>
        </ul>

        <h2 className="display">Social Impact (S)</h2>
        <p>
          Tata Steel supports education and health initiatives reaching over 1.4 million lives, particularly focused on tribal culture and maternal/newborn survival (e.g., in the Kolhan division, Jharkhand). 
        </p>
        <p>
          Reliance&apos;s Vantara project in Jamnagar spans 3,000 acres, significantly enhancing biodiversity and community engagement, in addition to widespread support for schools and health crises impacting millions across Gujarat.
        </p>

        <h2 className="display">Governance (G)</h2>
        <p>
          Governance models differ but highlight strong progressive targets. Tata Steel&apos;s board diversity emphasizes inclusion, which directly influences their community-centric CSR. Reliance targets 15% women in its workforce by 2030, showing a complex but promising influence on their massive CSR spending patterns.
        </p>
      </div>

      <section className={styles.downloadSection}>
        <h3 className="display" style={{marginBottom: '16px'}}>Read the Full Report</h3>
        <p style={{marginBottom: '24px', color: 'rgba(17,17,17,0.7)'}}>Download the complete presentation PDF with full datasets, source citations, and analysis frameworks.</p>
        <a href="/portfolio-next/assets/BEV.pdf" target="_blank" rel="noreferrer" className={styles.downloadBtn}>
          Download PDF Report
        </a>
      </section>
    </article>
  );
}
