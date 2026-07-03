import BlogShell from '../../components/BlogShell';
import Image from 'next/image';
import styles from '../../components/blog.module.css';

export const metadata = {
  title: 'Sustainable Corporate Finance — A Second-Best Path — Manas Pokley',
  description:
    'Why a global corporate purpose is impossible, and why green industrial policy plus climate litigation plus satellite evidence is the only path forward.',
};

const toc = [
  { id: 'intro', label: 'Introduction' },
  { id: 'limits', label: 'Limits of a global purpose' },
  { id: 'policy', label: 'Green industrial policy' },
  { id: 'litigation', label: 'Climate litigation' },
  { id: 'evidence', label: 'Satellite evidence' },
  { id: 'stats', label: 'Statistical analysis' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function SustainableFinanceBlog() {
  return (
    <BlogShell
      crumbs={[{ label: 'Sustainable Finance' }]}
      tags={['Response paper', 'IPM III', 'Climate litigation', 'GEE', '5IPM-37']}
      title="Sustainable Corporate Finance — A Second-Best Path"
      lede="In an era of sustainability challenges and political fragmentation, achieving a unified global corporate purpose is impossible. The only path that survives contact with geopolitics is a second-best one: green industrial policy, climate litigation, and satellite-grade evidence."
      meta={[
        { value: 'Manas Pokley', label: 'Author' },
        { value: 'Roll No. 2022-5IPM-37', label: 'Course ID' },
        { value: 'Sustainable Corporate Finance', label: 'Course' },
        { value: 'Oct 2024 – Jan 2025', label: 'Term' },
        { value: '2,486 words', label: 'Length' },
      ]}
      hero="/portfolio-next/images/illustrations/sf-hero.svg"
      toc={toc}
      doc="/portfolio-next/assets/2022-5IPM-37_Manas_Pokley.pdf"
      docLabel="Download 2022-5IPM-37_Manas_Pokley.pdf"
    >
      <section id="intro">
        <h2>Introduction</h2>
        <p>
          Due to prevalent global sustainability challenges and zealous
          geopolitics, achieving meaningful progress on the environment is
          harder than the public discourse suggests. Absent a unifying
          compromise from the political factions, the focus has to shift
          to other avenues that promise to realise at least some progress
          on sustainability objectives within the constraints of the
          current geo-economic reality.
        </p>
        <p>
          The argument made in this paper is that a combination of
          strategic green industrial policy implemented by major
          economies, robust climate litigation, and respect for
          jurisdictionally diverse approaches to corporate purpose, is the
          most feasible <em>second-best</em> way to advance sustainability
          objectives globally.
        </p>
        <p>
          The paper closes with a satellite-imagery case study of the
          Jamshedpur industrial region (2015–2023), generated with Google
          Earth Engine, and a basic statistical test on the night-light
          and land-surface-temperature series.
        </p>
      </section>

      <section id="limits">
        <h2>Limits of a Universal Corporate Purpose</h2>
        <p>
          Academic definitions of corporate purpose are jurisdictionally
          narrow. Nurgozhayeva and Puchniak (2020) argue that existing
          definitions remain trapped in a view that ignores the
          extraterritorial consequences of corporate actions, and the
          formal and informal legal frameworks that ought to address them.
        </p>
        <p>
          Climate change and the most pressing sustainability questions
          are, by their nature, <strong>global</strong>. They warrant a
          view of corporate purpose that extends beyond national borders.
        </p>
        <p>
          But the globalising of corporate purpose is not without
          problems. The very act of great powers, firms, and
          organisations defining the purpose of a corporation
          extraterritorially raises a serious concern: that the resulting
          definition will serve hegemonic interests at the expense of
          weaker communities.
        </p>
        <blockquote>
          The EU has been busy propagating a stakeholder-oriented
          corporate purpose worldwide, while the Chinese have taken a
          more nuanced, non-interventionist position. The two cannot be
          reconciled into a single global definition.
        </blockquote>
        <p>
          This is the central problem. There is no single, universally
          defensible, and operationally workable definition of corporate
          purpose that all jurisdictions can accept. The best one can do
          is identify a <em>second-best</em> set of mechanisms that
          function under the existing fragmentation.
        </p>
      </section>

      <section id="policy">
        <h2>Green Industrial Policy as Second-Best</h2>
        <p>
          The geopolitical landscape gives unilateral green industrial
          policies adopted by the predominantly industrialised countries a
          soft second-best plausibility. The US Inflation Reduction Act,
          the EU Green Deal, and India&apos;s renewable-energy targets can
          all inspire clean-technology development and large-scale
          deployment, even in the absence of perfect global coordination.
        </p>
        <p>
          The WTO permits environmental-policy exceptions under GATT
          Article XX — measures necessary to protect human, animal, or
          plant life or health, or relating to the conservation of
          exhaustible natural resources. <em>US — Shrimp</em> (1998)
          upheld a ban on shrimp caught without turtle-excluder devices
          as a conservation measure on an exhaustible resource. The legal
          door for unilateral green industrial policy is, accordingly,
          open.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-policies.svg"
            alt="Comparison of US Inflation Reduction Act, EU Green Deal, and India renewable targets"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 1 · Three pillars of unilateral green industrial policy</span>
            <span>src: IRA 2022 · EU Green Deal · India Panchamrit</span>
          </figcaption>
        </figure>

        <h3>Why it provokes clean tech</h3>
        <p>
          The US Inflation Reduction Act set aside $369 billion for
          climate and clean energy, including EV tax credits, renewable
          energy production, and home retrofits. The capex alone has
          catalysed a step-change in domestic clean-tech deployment,
          despite (and in places because of) the trade frictions it has
          created.
        </p>
        <h3>Why it provokes trade frictions</h3>
        <p>
          Unilateral green industrial policies can lead to trade
          hostilities when they are considered protectionist. The
          proposed EU Carbon Border Adjustment Mechanism (CBAM), which
          sets a carbon price on imports of certain goods, has drawn
          criticism from trading partners who see it as a trade barrier
          in climate-policy clothing.
        </p>
        <p>
          This is a real cost. But the cost is a tractable policy
          problem, and the underlying mechanism — large economies using
          domestic policy to drive clean-tech deployment — is the only
          thing that has actually moved the needle on emissions in the
          last five years.
        </p>
      </section>

      <section id="litigation">
        <h2>Symbiosis with Climate Litigation</h2>
        <p>
          Green industrial policy is not enough on its own. In tandem,
          litigation is playing a significant role in compelling
          corporates to meet their accountability to the environment and
          to society, and to invest sustainably.
        </p>
        <p>
          Landmark cases around the globe are establishing that a
          government&apos;s inaction on climate change constitutes a
          violation of human rights, and that this in turn compels
          companies to account for and take responsibility for their{' '}
          <strong>Scope 3 emissions</strong>. Climate-washing lawsuits in
          particular enjoy a roughly 70% success rate, pressuring
          corporations to revisit their traditional risk models and
          accept more sustainable practice.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-litigation.svg"
            alt="Climate litigation timeline: Urgenda 2015, Milieudefensie v Shell 2019, KlimSeniorinnen 2023, projected Scope 3 mandate 2030"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 2 · Climate litigation timeline · landmark cases</span>
            <span>src: LSE Grantham · Sabin Center</span>
          </figcaption>
        </figure>

        <h3>Milieudefensie v. Shell</h3>
        <p>
          The Dutch court ordered Royal Dutch Shell to reduce its CO₂
          emissions by 45% by 2030 relative to 2019 levels. The decision
          rests on a duty of care under Dutch tort law, applied to the
          company&apos;s Scope 3 emissions. It is the first time a court
          has imposed a specific emissions-reduction target on a major
          private oil-and-gas company. The decision is under appeal, but
          the doctrinal path is open.
        </p>
        <h3>KlimSeniorinnen v. Switzerland</h3>
        <p>
          The European Court of Human Rights held that Switzerland&apos;s
          inadequate climate policy violated the convention rights of an
          elderly women&apos;s group. The case is significant for
          establishing that <em>group standing</em> in climate
          litigation is permissible, and that a government&apos;s failure
          to meet its Paris Agreement commitments can be a human-rights
          violation.
        </p>
        <p>
          Together, these cases establish a doctrinal pattern: courts
          can act where regulators will not, and companies can be made
          to internalise the social cost of their emissions. This is
          exactly the complement green industrial policy needs.
        </p>
      </section>

      <section id="evidence">
        <h2>Satellite Imagery as Evidence</h2>
        <p>
          The third leg of the second-best tripod is <em>satellite-grade
          environmental evidence</em>. Using <strong>Google Earth
          Engine</strong>, we can observe environmental changes that
          demand immediate policy action. The case study below analyses
          the Jamshedpur industrial region from 2015 to 2023, using
          four freely available datasets.
        </p>
        <p>
          Datasets used:
        </p>
        <ul>
          <li><code>NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG</code> — Night-light intensity</li>
          <li><code>MODIS/061/MOD11A1</code> — Land surface temperature</li>
          <li><code>GOOGLE/DYNAMICWORLD/V1</code> — Land cover classification</li>
          <li><code>LANDSAT/LC08/C02/T1_TOA</code> — Urban area analysis</li>
        </ul>

        <h3>Figure 1 — Night-light intensity</h3>
        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-nightlights.svg"
            alt="NOAA VIIRS night light intensity changes around Tata Steel Plant Jamshedpur 2015 to 2023, with intensity growing from low to high"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 3 · Night-light intensity changes around Tata Steel Plant, Jamshedpur (2015–2023)</span>
            <span>yellow → red: light intensity</span>
          </figcaption>
        </figure>
        <p>
          Night-light imagery confirms increased illumination in the
          red/yellow band, indicating a steady increase in industrial
          activity and expansion of urbanisation around the steel plant.
          The intensity and spatial extent of lights has grown in every
          year of the 2015–2023 window. The growth is concentrated in a
          2-km radius around the plant core, with secondary growth
          along the transport corridors radiating outward.
        </p>

        <h3>Figure 2 — Surface temperature</h3>
        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-temperature.svg"
            alt="MODIS land surface temperature map showing urban heat island formation around industrial zones in Jamshedpur, red indicates hottest areas"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 4 · Surface temperature distribution, Jamshedpur industrial region (2015–2023)</span>
            <span>red → hot · blue → cool</span>
          </figcaption>
        </figure>
        <p>
          The temperature map indicates the formation of <strong>urban
          heat islands</strong> surrounding industrial zones. There is a
          remarkable temperature rise, especially in and around
          industrial sites and extending urban regions, with peak LST
          values exceeding 41 °C in the warmest months. The pattern
          replicates findings from other South-Asian industrial belts:
          impervious-surface expansion, particulate loading, and
          reduced vegetation cover combine to produce a 2–4 °C LST
          differential relative to the rural surround.
        </p>

        <h3>Figure 3 — Land cover change</h3>
        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-landcover.svg"
            alt="Dynamic World land cover change map showing conversion from vegetation and cropland to built-up areas between 2015 and 2023"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 5 · Land cover classification, Jamshedpur urban area (2015–2023)</span>
            <span>orange/brown = cropland · black = industrial</span>
          </figcaption>
        </figure>
        <p>
          Urban land-use modification from green open space and
          agricultural ground to built-up area is visible in the
          difference. The 2023 panel shows a thick red zone of
          industrial-and-built-up land, with cropland (yellow-brown)
          substantially reduced relative to the 2015 baseline.
        </p>

        <h3>Figure 4 — Urban expansion</h3>
        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-urban.svg"
            alt="Urban area expansion pattern radiating outward from the Tata Steel plant core, blue intensity indicating built-up area increase"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 6 · Urban area expansion patterns, Jamshedpur region (2015–2023)</span>
            <span>src: Landsat 8 TOA · built-up pixel convex hull</span>
          </figcaption>
        </figure>
        <p>
          Analysis of built-up area, with darker blue indicating
          increased urbanisation, highlights the spatial extent of
          urbanisation radiating away from industrial areas. The
          pattern is consistent with a <em>3.4× increase in built-up
          area</em> across the 9-year window.
        </p>
      </section>

      <section id="stats">
        <h2>Statistical Analysis</h2>
        <p>
          In further support of the case for urgent action, I performed a
          basic statistical analysis on the GEE-exported series, with
          three tests.
        </p>

        <h3>Sinusoidal fit on daytime LST</h3>
        <figure className={styles.figure}>
          <Image
            src="/portfolio-next/images/illustrations/sf-lst-fit.svg"
            alt="Sinusoidal fit of MODIS daytime land surface temperature near Jamshedpur Tata Steel plant from 2015 to 2023, fitted with LST of t equals LST0 plus delta LST cosine 2 pi t tau minus phi"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 7 · MODIS daytime LST · sinusoidal fit (Stallman 1965)</span>
            <span>τ ≈ 365 d · ΔLST ≈ 8.4° · LST₀ ≈ 31.6°</span>
          </figcaption>
        </figure>
        <p>
          We expect LST to have a seasonality influence, and the
          sinusoidal trend described by Stallman (1965) reads:
        </p>
        <blockquote>
          LST(t) = LST₀ + ΔLST · cos(2πt/τ − φ)
        </blockquote>
        <p>
          where LST₀ is the mean annual LST, ΔLST is the amplitude
          between maximal and minimal LST, τ is the period of
          oscillation of LST, and φ is an offset needed to adjust the
          time when LST(t) = LST₀.
        </p>
        <p>
          Fitting the model to the 2015–2023 daily series with{' '}
          <code>scipy.optimize.curve_fit</code> yields τ ≈ 365 d,
          ΔLST ≈ 8.4 °C, and a residual mean of 31.6 °C. The mean
          temperature trend over the 8-year window is approximately{' '}
          <strong>+1.4 °C (p &lt; 0.05)</strong> — a significant warming
          signal that, even after detrending the seasonal cycle,
          survives.
        </p>

        <h3>Mann-Kendall test on NDVI</h3>
        <p>
          The Normalised Difference Vegetation Index (NDVI) is monitored
          from 2015 to 2023 against the null hypothesis that there is
          no temporal trend in vegetation in the Jamshedpur region. The
          alternative is that there exists a temporal trend of
          vegetation loss or recovery.
        </p>
        <p>
          The Mann-Kendall statistic for the 2017–2020 sub-window is
          significant at p &lt; 0.05, with a negative sign — a
          statistically detectable loss of vegetation greenness in the
          buffer around the plant. The signal reverses partially in
          2021–2023 (likely a monsoon-year effect), but the longer-term
          trend is unambiguously negative.
        </p>

        <h3>Chi-square test on land-cover change</h3>
        <p>
          A chi-square test on the contingency table of land-cover
          classes (2015 vs 2023) returns a test statistic well above
          the critical value at α = 0.01. The scale of change implies
          stronger land-use management policies; environmental impact
          assessments should be a priority; and mitigation strategies
          may be warranted to counter the unintended consequences of
          rapid land-use transformation.
        </p>

        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>+1.4 °C</span>
            <span className={styles.summaryL}>mean LST trend, 2015–2023 (p &lt; 0.05)</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>3.4×</span>
            <span className={styles.summaryL}>built-up area expansion</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>70%</span>
            <span className={styles.summaryL}>climate-washing lawsuit success rate</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>$369 B</span>
            <span className={styles.summaryL}>US IRA capex on climate &amp; clean energy</span>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Confronted with global sustainability challenges and political
          obstacles to a universal consensus of action, a pragmatic
          &quot;race to the top&quot; approach — green industrial policy,
          climate litigation, and respect for diverse corporate-purpose
          frameworks — remains the most promising second-best
          alternative.
        </p>
        <p>
          Enabling the big economies to drive clean-technology
          development, holding corporations accountable through legal
          action, and using satellite imagery to support evidence-based
          decisions will allow real progress within the bounds of
          market mechanisms. The Jamshedpur case study demonstrates
          that the data to support such decisions is now freely
          available, the legal pathways are opening, and the policy
          mechanism (unilateral green industrial policy) has been
          demonstrated to be effective at scale.
        </p>
        <p>
          The second-best choice is not without stumbling blocks.
          Political tensions and contrasting interests may disable a
          green industrial policy or climate litigation from achieving
          its objectives. But the present geo-economic landscape affords
          opportunities for action, and policymakers and corporate
          leaders can ensure a balance between the principles of a
          sustainable future and the messy reality of international
          politics.
        </p>

        <h3>References</h3>
        <ol className={styles.citeList}>
          <li data-n="1">Nurgozhayeva, R., &amp; Puchniak, D. W. (2020). <em>The globalization of corporate purpose</em>. Stanford Law Review.</li>
          <li data-n="2">Stallman, H. W. (1965). Numerical analysis of regional water levels. <em>Journal of Geophysical Research</em>, 70(20), 5195–5204.</li>
          <li data-n="3">Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., &amp; Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. <em>Remote Sensing of Environment</em>.</li>
          <li data-n="4">Milieudefensie v. Royal Dutch Shell PLC, District Court of The Hague, C/09/571932 (2021).</li>
          <li data-n="5">Urgenda Foundation v. State of the Netherlands, Supreme Court of the Netherlands (2019).</li>
          <li data-n="6">KlimSeniorinnen v. Switzerland, ECHR (2024).</li>
          <li data-n="7">US Inflation Reduction Act of 2022, Public Law 117-169.</li>
          <li data-n="8">EU Carbon Border Adjustment Mechanism, Regulation (EU) 2023/956.</li>
        </ol>
      </section>

      <div className={styles.authorCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.authorName}>Manas Pokley</p>
          <p className={styles.authorRole}>Roll No. 2022-5IPM-37 · IPM III · Term VIII (Oct 2024 – Jan 2025)</p>
        </div>
      </div>
    </BlogShell>
  );
}
