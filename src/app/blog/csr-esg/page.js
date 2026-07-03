import BlogShell from '../../components/BlogShell';
import Image from 'next/image';
import styles from '../../components/blog.module.css';

export const metadata = {
  title: 'Comparative Analysis of CSR and ESG Impacts — Tata Steel vs Reliance — Manas Pokley',
  description:
    'A side-by-side study of Tata Steel Jamshedpur and Reliance Jamnagar Refinery — CSR spend, Scope 1+2 emissions, social footprint, governance.',
};

const toc = [
  { id: 'intro', label: 'Introduction' },
  { id: 'spend', label: 'CSR spend' },
  { id: 'environment', label: 'Environmental impact' },
  { id: 'social', label: 'Social impact' },
  { id: 'governance', label: 'Governance' },
  { id: 'summary', label: 'Comparative summary' },
  { id: 'method', label: 'Method & caveats' },
];

export default function CSRESGBlog() {
  return (
    <BlogShell
      crumbs={[{ label: 'CSR vs ESG' }]}
      tags={['Research', 'CSR', 'ESG', 'India', 'Industry', 'BEV.pdf']}
      title="Comparative Analysis of CSR & ESG Impacts"
      lede="Tata Steel Jamshedpur versus Reliance Jamnagar Refinery. Two of India&apos;s largest industrial anchors, side by side on spend, emissions, social footprint, and governance — and what the numbers hide."
      meta={[
        { value: 'Manas Pokley · Suyash Gaikwad', label: 'Authors' },
        { value: 'DoMS, NALSAR', label: 'Institution' },
        { value: '08 Apr 2025', label: 'Published' },
        { value: '13 pages', label: 'Length' },
      ]}
      hero="/images/illustrations/csr-hero.svg"
      toc={toc}
      doc="/assets/BEV.pdf"
      docLabel="Download BEV.pdf"
    >
      <section id="intro">
        <h2>Introduction</h2>
        <p>
          This report compares the Corporate Social Responsibility (CSR) and
          Environmental, Social, and Governance (ESG) initiatives of two of
          India&apos;s largest single-site industrial operations:{' '}
          <strong>Tata Steel&apos;s Jamshedpur complex</strong> and the{' '}
          <strong>Reliance Jamnagar Refinery</strong>. Both have spent
          significant sums on social programmes, both publish annual
          sustainability disclosures, and both face sustained NGO and
          regulator scrutiny. They differ in industry (integrated steel
          versus oil refining), in ownership structure, and in scale.
        </p>
        <p>
          We focus on four variables. <strong>CSR expenditure</strong> against
          the most recent full-year disclosure. <strong>Environmental
          performance</strong> via Scope 1 and 2 emissions. <strong>Social
          contribution</strong> to education, health, and biodiversity.
          And <strong>governance</strong> — specifically board composition
          and stated diversity targets — as a leading indicator of CSR
          design.
        </p>
        <p>
          All figures are drawn from the FY 2022-23 disclosures (Tata Steel)
          and FY 2023-24 disclosures (Reliance). We cite the underlying
          report for every number, and flag a handful of figures that are
          contested or not directly comparable.
        </p>
      </section>

      <section id="spend">
        <h2>CSR Spend</h2>
        <p>
          Both companies allocate significant funds to CSR. The headline
          number is that <strong>Reliance Jamnagar spent ~3.3× what Tata
          Steel Jamshedpur did</strong> in their respective most-recent
          reporting years.
        </p>

        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>₹481 cr</span>
            <span className={styles.summaryL}>Tata Steel CSR · FY 2022-23</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>₹1,592 cr</span>
            <span className={styles.summaryL}>Reliance CSR · FY 2023-24</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>+18.5%</span>
            <span className={styles.summaryL}>Tata YoY change · 2021-22 → 2022-23</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryK}>~3.3×</span>
            <span className={styles.summaryL}>Reliance-to-Tata CSR multiple</span>
          </div>
        </div>

        <figure className={styles.figure}>
          <Image
            src="/images/illustrations/csr-spend.svg"
            alt="CSR spend comparison: Tata Steel Rs 481 crore vs Reliance Rs 1,592 crore"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 1 · CSR expenditure · FY 2022-23 / FY 2023-24</span>
            <span>src: annual reports</span>
          </figcaption>
        </figure>

        <h3>What the headline number hides</h3>
        <p>
          Tata Steel&apos;s CSR spend increased 18.49% year-on-year, from ₹406
          crore in FY 2021-22 to ₹481 crore in FY 2022-23 — a meaningful
          rise, though from a smaller base. Reliance&apos;s spend is materially
          larger because (a) the Jamnagar complex alone is the largest
          single-site refinery in the world, and (b) the company is
          consolidating the bulk of its social spending — including the{' '}
          <em>Vantara</em> animal-welfare and biodiversity project — into a
          single Jamnagar-attributed programme.
        </p>
        <p>
          Both companies operate flagship programmes at the plant site.
          Tata Steel Jamshedpur&apos;s CSR is concentrated in the Kolhan
          division of Jharkhand — education, health, and tribal culture.
          Reliance Jamnagar&apos;s flagship is the 3,000-acre Vantara
          project, with adjacent school and health initiatives spread
          across Gujarat.
        </p>
      </section>

      <section id="environment">
        <h2>Environmental Impact (E)</h2>
        <p>
          Scope 1 and Scope 2 emissions are the only line items that admit
          apples-to-apples comparison. Scope 3 (downstream use of sold
          steel, end-use combustion of refined products) is not yet
          consistently reported by either company and is omitted from the
          comparison.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/images/illustrations/csr-emissions.svg"
            alt="Estimated CO2e emissions: Tata Steel Jamshedpur 24.3 Mt vs Reliance Jamnagar 32.38 Mt"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 2 · Scope 1 + 2 emissions · million tons CO₂e</span>
            <span>src: Tata CCR · Climate TRACE 2022</span>
          </figcaption>
        </figure>

        <p>
          <strong>Tata Steel Jamshedpur</strong> discloses approximately
          24.3 million tons of CO₂ in combined Scope 1 and Scope 2. The
          single largest mitigation initiative disclosed in 2024 is the
          biochar programme, which the company&apos;s own press release
          claims reduces carbon emissions by over 50,000 tons annually.
          Biochar is a credible process-emissions reducer for blast-furnace
          steel, but 50 kt/yr is a small fraction of the 24 Mt total — the
          company&apos;s published decarbonisation pathway depends on
          hydrogen-ready DRI and electric-arc conversion, neither of which
          is yet operational at the Jamshedpur site.
        </p>
        <p>
          <strong>Reliance Jamnagar</strong> reported 32.38 million tons
          CO₂e in 2022 (per Climate TRACE). The company&apos;s strategy is
          giga-scale green-energy buildout — four giga-factories for green
          hydrogen were announced, with capex commitments running into
          the tens of billions of dollars. None of these facilities is yet
          in commercial production.
        </p>
        <blockquote>
          Direct Mt-to-Mt comparison is misleading. Refining emits less
          per unit of product than integrated steel. A production-normalised
          intensity comparison (tCO₂/t-crude vs tCO₂/t-steel) is needed
          before any conclusion can be drawn about which company is
          reducing faster.
        </blockquote>
      </section>

      <section id="social">
        <h2>Social Impact (S)</h2>
        <p>
          Both companies publish very large social-impact numbers. The
          metrics are not directly comparable, because they use different
          units (people reached vs acres of intervention) and because
          the underlying definitions of &quot;impact&quot; are not
          standardised.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/images/illustrations/csr-social.svg"
            alt="Social impact: Tata reaches 1.4 million lives, Reliance operates a 3,000-acre Vantara project"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 3 · Social footprint · people vs acres</span>
            <span>src: Tata CSR Expenditure Report · Reliance Foundation</span>
          </figcaption>
        </figure>

        <p>
          <strong>Tata Steel Jamshedpur</strong> claims to reach
          approximately 1.4 million lives through its foundation&apos;s
          education, health, and tribal-culture programmes. The number is
          self-reported and includes both direct programme participants
          and indirect beneficiaries (e.g., families of health-programme
          patients). The maternal and newborn-survival work in the Kolhan
          division is the most-cited programme and is independently
          validated by the state government.
        </p>
        <p>
          <strong>Reliance Jamnagar&apos;s</strong> social spending runs
          through Reliance Foundation. The flagship is the Vantara project
          — a 3,000-acre animal-welfare, conservation, and biodiversity
          intervention located adjacent to the refinery. The scale is
          genuinely unusual for a corporate CSR programme. Reliance also
          supports schools, runs health-crisis response in Gujarat, and
          operates a national digital-learning platform.
        </p>
        <p>
          On a per-rupee-spent basis, Tata&apos;s programmes reach more
          people per crore, because the cost basis of an education
          programme is lower than that of a 3,000-acre conservation
          project. On an absolute scale, Reliance&apos;s programmes have
          materially larger budgets and reach. Neither finding should be
          read as a quality judgment.
        </p>
      </section>

      <section id="governance">
        <h2>Governance (G)</h2>
        <p>
          Governance is the only dimension where the question of
          <em> why </em> a company allocates its CSR the way it does is
          directly addressable. We look at board composition and stated
          diversity targets.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/images/illustrations/csr-governance.svg"
            alt="Governance feedback loop: board diversity influences CSR strategy influences disclosure"
            width={800}
            height={460}
          />
          <figcaption className={styles.figureCap}>
            <span>FIG 4 · Governance feedback loop</span>
            <span>conjectured — see method</span>
          </figcaption>
        </figure>

        <p>
          <strong>Tata Steel</strong> operates a board that emphasises
          inclusion in its published governance disclosures, with
          independent directors forming a majority. The company has
          linked board diversity to its community-centric CSR strategy in
          its own narrative reporting.
        </p>
        <p>
          <strong>Reliance</strong> has set a 15% women-in-workforce
          target for 2030, from a current base that is materially below
          this level. The causal link between this target and Reliance
          Jamnagar&apos;s CSR spending pattern is more difficult to
          establish — the CSR programme design appears driven primarily
          by the Chairman&apos;s office and the Reliance Foundation
          board, with a less obvious board-level diversity → CSR
          feedback loop.
        </p>
        <p>
          The direct causal link from board composition to CSR design is
          in both cases <em>weak</em> — confounded by founder influence,
          family-holding structure, and regulatory caps on CSR spending
          as a percentage of net profit. A clean empirical test would
          require a panel of comparable Indian industrial companies, which
          is outside the scope of this report.
        </p>
      </section>

      <section id="summary">
        <h2>Comparative Summary</h2>
        <p>
          The table below consolidates the four dimensions of comparison.
        </p>

        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Tata Steel Jamshedpur</th>
              <th>Reliance Jamnagar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSR spend (FY)</td>
              <td>₹481 crore</td>
              <td>₹1,592 crore</td>
            </tr>
            <tr>
              <td>Flagship ESG initiative</td>
              <td>Biochar, foundation programmes</td>
              <td>Green energy giga-factories, Vantara</td>
            </tr>
            <tr>
              <td>Scope 1+2 emissions</td>
              <td>24.3 Mt CO₂</td>
              <td>32.38 Mt CO₂e</td>
            </tr>
            <tr>
              <td>Social impact metric</td>
              <td>1.4M lives</td>
              <td>3,000 acres + statewide reach</td>
            </tr>
            <tr>
              <td>Governance signal</td>
              <td>Diverse, independent-majority board</td>
              <td>15% women-in-workforce target by 2030</td>
            </tr>
          </tbody>
        </table>

        <p>
          Tata Steel Jamshedpur excels in emission reduction intensity and
          community-outreach density. Reliance Jamnagar leads in absolute
          CSR spend and large-scale social programmes. Both demonstrate
          strong governance diversity, though the direct link between
          board composition and local CSR design needs a wider empirical
          study.
        </p>
      </section>

      <section id="method">
        <h2>Method &amp; Caveats</h2>
        <p>
          Data is drawn from annual reports and other primary disclosures
          for FY 2022-23 (Tata Steel) and FY 2023-24 (Reliance). All
          numbers in the figures and tables above are footnoted to their
          original source in the appendix of the full report.
        </p>
        <h3>What this report does not do</h3>
        <ul>
          <li>
            It does not normalise emissions by production output. A
            production-normalised comparison (tCO₂/t-steel and tCO₂/t-crude)
            is needed before any conclusion about <em>who is reducing
            faster</em> can be drawn.
          </li>
          <li>
            It does not include Scope 3 emissions. Neither company reports
            Scope 3 in a directly comparable format at the time of writing.
          </li>
          <li>
            It does not test the causal link between governance and CSR
            design. The feedback loop in Figure 4 is conjectural.
          </li>
        </ul>

        <h3>Source citations (selected)</h3>
        <ol className={styles.citeList}>
          <li data-n="1">Tata Steel Annual Report 2022-23, p. 22 — CSR spend.</li>
          <li data-n="2">Reliance Integrated Annual Report 2023-24, p. — CSR spend.</li>
          <li data-n="3">Tata Steel Climate Change Report — Scope 1+2 disclosure.</li>
          <li data-n="4">Climate TRACE data, 2022 — Reliance Jamnagar emissions estimate.</li>
          <li data-n="5">Tata Steel Press Release, 2024 — Biochar programme, 50 kt/yr.</li>
          <li data-n="6">Reliance Sustainability Report — giga-factory commitments.</li>
          <li data-n="7">Tata Steel CSR Expenditure Report — 1.4M lives claim.</li>
          <li data-n="8">Reliance Foundation Reports — Vantara 3,000-acre claim.</li>
        </ol>
      </section>

      <div className={styles.authorCard}>
        <div className={styles.avatar}>M</div>
        <div>
          <p className={styles.authorName}>Manas Pokley &amp; Suyash Gaikwad</p>
          <p className={styles.authorRole}>Department of Management Studies · NALSAR</p>
        </div>
      </div>
    </BlogShell>
  );
}
