import BlogShell from '../../components/BlogShell';
import styles from '../../components/blog.module.css';

export default function EmissionsTrackingBlog() {
  const toc = [
    { id: 'research-context', title: 'Research Context' },
    { id: 'core-questions', title: 'Core Questions' },
    { id: 'datasets', title: 'Earth Engine Datasets' },
  ];

  return (
    <BlogShell
      title="Research Notes: Tracking commodity markets via spatial emission footprints"
      meta={[
        { value: '14 Mar 2026', label: 'Published' },
        { value: 'Field Notes', label: 'Category' },
      ]}
      hero="/portfolio-next/images/finance.jpg?v=2"
      toc={toc}
    >
      <section id="research-context" className={styles.section}>
        <h2>Research Context</h2>
        <p>
          Can we predict commodity prices and industrial health by tracking waste and emissions from space? This research draft explores the feasibility of using Google Earth Engine to conduct ML analysis on geospatial data. The core idea is to examine the correlation between the types of wastes disposed at landfills or emitted by industrial clusters, and the financial health of the industries producing them.
        </p>
      </section>

      <section id="core-questions" className={styles.section}>
        <h2>Core Questions</h2>
        <p>
          Initially, the analysis focuses on tracking Methane, CO, CO2, Sulphur oxides, and Nitrogen oxides emissions. 
        </p>
        <ul>
          <li><strong>Q.1)</strong> What is the correlation between methane emissions from landfills and the commodity prices of industries producing organic waste?</li>
          <li><strong>Q.2)</strong> How do sulfur dioxide emissions from industrial areas correlate with the production of sulfur-intensive commodities?</li>
        </ul>
      </section>

      <section id="datasets" className={styles.section}>
        <h2>Earth Engine Datasets</h2>
        <p>
          To answer these questions, we are evaluating a suite of GEE datasets. These include <strong>MODIS Gross Primary Productivity (MYD17A2H)</strong> for understanding underlying carbon cycle processes, <strong>MERRA-2 Aerosol Diagnostics</strong> for tracking sulfur dioxide and black carbon mixing ratios, and global biomass/carbon density maps. By tying these spatial indicators to economic time-series, we hope to identify structural economic relationships purely from satellite telemetry.
        </p>
      </section>

      <div className={styles.authorCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.authorName}>Manas Pokley</p>
          <p className={styles.authorRole}>Spatial Analysis · Economic Modeling</p>
        </div>
      </div>
    </BlogShell>
  );
}
