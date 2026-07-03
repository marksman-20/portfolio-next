import BlogShell from '../../components/BlogShell';
import Image from 'next/image';
import styles from '../BlogPage.module.css';

export default function SiteRiskBlog() {
  const toc = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'methodology', title: 'Methodology' },
    { id: 'impact', title: 'Impact' },
  ];

  return (
    <BlogShell
      title="SiteRisk.io: Bank-ready physical climate risk for India"
      meta={[
        { value: '03 Jul 2026', label: 'Published' },
        { value: 'Climate Risk', label: 'Category' },
      ]}
      hero="/portfolio-next/images/siterisk.jpg?v=2"
      toc={toc}
    >
      <section id="introduction" className={styles.section}>
        <h2>Introduction</h2>
        <p>
          Bank-ready physical climate risk for Indian properties requires a nuanced approach. SiteRisk.io applies Generalized Extreme Value (GEV) distribution models and Markov Chain Monte Carlo (MCMC) simulations on ERA5, GloFAS, and CMIP6 data.
        </p>
      </section>

      <section id="methodology" className={styles.section}>
        <h2>Methodology</h2>
        <p>
          Instead of building another dashboard, we focused on the lending desk. By integrating direct climate risk metrics into existing financial models, lenders can accurately assess the long-term viability of assets under changing environmental conditions.
        </p>
      </section>

      <section id="impact" className={styles.section}>
        <h2>Impact</h2>
        <p>
          The result is a robust, data-driven framework that bridges the gap between atmospheric science and quantitative finance, ensuring that physical climate risks are priced into the market efficiently and accurately.
        </p>
      </section>

      <div className={styles.authorCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.authorName}>Manas Pokley</p>
          <p className={styles.authorRole}>Climate Modeling · Quantitative Finance</p>
        </div>
      </div>
    </BlogShell>
  );
}
