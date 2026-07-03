import BlogShell from '../../components/BlogShell';
import Image from 'next/image';
import styles from '../BlogPage.module.css';

export default function KharifcastBlog() {
  const toc = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'methodology', title: 'Methodology' },
    { id: 'impact', title: 'Impact' },
  ];

  return (
    <BlogShell
      title="KharifCast: Monsoon crop advisory and SDEs for lending"
      meta={[
        { value: '30 Jun 2026', label: 'Published' },
        { value: 'Agri-finance', label: 'Category' },
      ]}
      hero="/portfolio-next/images/kharifcast.jpg?v=2"
      toc={toc}
    >
      <section id="introduction" className={styles.section}>
        <h2>Introduction</h2>
        <p>
          Providing monsoon crop advisory for agri-lenders is a critical challenge in India. KharifCast delivers district-level risk scores from an Ornstein-Uhlenbeck (OU) jump Stochastic Differential Equation (SDE) ensemble.
        </p>
      </section>

      <section id="methodology" className={styles.section}>
        <h2>Methodology</h2>
        <p>
          The models are rigorously calibrated against historical IMD station data. By leveraging probabilistic forecasting, we translate meteorological uncertainty into actionable lending signals for agricultural portfolios.
        </p>
      </section>

      <section id="impact" className={styles.section}>
        <h2>Impact</h2>
        <p>
          This capability empowers financial institutions to manage their exposure dynamically, reducing defaults caused by severe weather events while supporting resilient agricultural practices across volatile seasons.
        </p>
      </section>

      <div className={styles.authorCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.authorName}>Manas Pokley</p>
          <p className={styles.authorRole}>Agricultural Economics · Stochastic Processes</p>
        </div>
      </div>
    </BlogShell>
  );
}
