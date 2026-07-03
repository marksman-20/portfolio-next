import styles from '../../blog.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SustainableFinanceBlog() {
  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>← Back to Projects</Link>
      
      <header className={styles.header}>
        <h1 className={`${styles.title} display`}>Sustainable Corporate Finance & Policy Accountability</h1>
        <div className={styles.meta}>
          <span>Manas Pokley</span>
          <span>Response Paper</span>
        </div>
      </header>

      <div className={styles.content}>
        <p>
          In an era where the world struggles with sustainability challenges and political fragmentation, achieving a unified global corporate purpose is incredibly difficult. This paper argues that a combination of <strong>strategic green industrial policies</strong> by major economies and <strong>robust climate litigation</strong> provides the most viable &quot;second-best&quot; solution for advancing global sustainability.
        </p>

        <Image src="/images/extracted/finance_page5_4.jpeg" alt="Global satellite data visualization" width={800} height={400} className={styles.heroImage} />

        <h2 className="display">Green Industrial Policies as a Catalyst</h2>
        <p>
          Unilateral green industrial policies, such as the US Inflation Reduction Act, the EU Green Deal, and India&apos;s renewable energy targets, inspire clean technology development and large-scale deployment even without perfect global coordination.
        </p>
        <p>
          While these policies can sometimes lead to trade hostilities (e.g., the EU Carbon Border Adjustment Mechanism), they provoke rapid clean tech innovation by allocating billions towards EV tax credits, renewable energy production, and green infrastructure.
        </p>

        <h2 className="display">The Role of Climate Litigation</h2>
        <p>
          Climate litigation acts symbiotically with green policies. Successful lawsuits—like <em>Milieudefensie v. Shell</em> in the Netherlands, which mandated a 45% reduction in CO2 emissions by 2030—send powerful signals to corporations. Landmark cases are establishing that government inaction on climate change constitutes a human rights violation, compelling companies to account for their Scope 3 emissions.
        </p>

        <Image src="/images/extracted/finance_page5_8.jpeg" alt="Satellite imagery mapping urban areas" width={800} height={400} className={styles.inlineImage} />

        <h2 className="display">Satellite Imagery: Evidence for Accountability</h2>
        <p>
          Using <strong>Google Earth Engine</strong>, we can observe undeniable environmental changes requiring immediate policy action. In analyzing the Jamshedpur industrial region from 2015-2023, several datasets reveal urgent trends:
        </p>
        <ul>
          <li><strong>Night Light Intensity (NOAA/VIIRS):</strong> Confirms increased illumination, indicating expanded industrial activity and urbanization around the steel plant.</li>
          <li><strong>Surface Temperature (MODIS):</strong> Highlights the formation of severe urban heat islands surrounding industrial zones, necessitating green mitigation practices.</li>
          <li><strong>Land Cover Change:</strong> Demonstrates rapid modifications from green open spaces and agricultural land into built-up industrial zones, emphasizing the need for strict land-use management.</li>
        </ul>

        <h2 className="display">Conclusion</h2>
        <p>
          While a perfect, universally agreed-upon global sustainability framework remains elusive, a pragmatic &quot;race to the top&quot; is possible. By enabling large economies to drive clean tech through policy, holding corporations accountable via litigation, and using satellite data for evidence-based decision-making, we can make substantial progress within the limits of our current market mechanisms.
        </p>
      </div>

      <section className={styles.downloadSection}>
        <h3 className="display" style={{marginBottom: '16px'}}>Read the Full Paper</h3>
        <p style={{marginBottom: '24px', color: 'rgba(17,17,17,0.7)'}}>Download the complete response paper containing the statistical analysis, GEE visual explanations, and methodology.</p>
        <a href="/portfolio-next/assets/2022-5IPM-37_Manas_Pokley.pdf" target="_blank" rel="noreferrer" className={styles.downloadBtn}>
          Download PDF Paper
        </a>
      </section>
    </article>
  );
}
