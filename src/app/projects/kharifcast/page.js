import ProjectDocShell from '../../components/ProjectDocShell';
import styles from '../project.module.css';

export const metadata = {
  title: 'KharifCast — Monsoon Advisory API — Manas Pokley',
  description:
    'District-level monsoon advisory for agri-lenders. OU-jump SDE ensemble, calibrated against IMD station data.',
};

const sideLinks = [
  { id: 'overview', label: 'Overview' },
  { id: 'how', label: 'How it works' },
  { id: 'stack', label: 'Stack' },
  { id: 'api', label: 'Endpoints' },
  { id: 'model', label: 'SDE model' },
  { id: 'signals', label: 'Risk signals' },
  { id: 'demo', label: 'Live demo' },
  { id: 'limits', label: 'Limitations' },
];

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    body: (
      <>
        <p>
          KharifCast is a district-level monsoon advisory API for
          agri-lenders. The product is a within-season risk signal:
          given a district, a crop, and a candidate sowing date, return
          the probability of three scenarios — favorable window, dry
          spell, excess rain — over the rest of the kharif season.
        </p>
        <p>
          The current build is a working demo. The model is an
          Ornstein-Uhlenbeck process with Poisson jumps, parameters
          fit per-district by MCMC on IMD station data. The simulator
          draws 1,000 Monte-Carlo paths per sowing-date candidate, and
          compresses the path distribution into percentile bands and
          exceedance probabilities.
        </p>
        <p>
          The MVP targets the credit-stress signal: India Ratings has
          noted that a temporal skew in rainfall is more impactful than
          cumulative rainfall, because it coincides with the critical
          maturity phase of kharif crops. KharifCast&apos;s output is
          designed to be that signal, on a per-district, per-crop
          basis.
        </p>
      </>
    ),
  },
  {
    id: 'how',
    title: 'How it works',
    body: (
      <>
        <p>
          The pipeline is four stages. The model is implemented in
          Julia (DifferentialEquations.jl for the SDE solver) and
          wrapped with a Python FastAPI service for the backend.
        </p>
        <ol>
          <li>
            <strong>District ingest.</strong> Client supplies a district
            (10 of 28 supported in the current build) and a crop. The
            backend resolves to the matching IMD station and ICRISAT
            District-Level Database record.
          </li>
          <li>
            <strong>Parameter fit.</strong> MCMC is run against the
            historical IMD daily-rainfall series to produce a posterior
            on the OU drift (μ), mean-reversion (θ), diffusion (σ), and
            jump intensity (λ).
          </li>
          <li>
            <strong>Monte-Carlo simulation.</strong> 1,000 paths of the
            SDE are simulated from the candidate sowing date through
            the rest of the season.
          </li>
          <li>
            <strong>Scenario compression.</strong> Paths are bucketed
            into favorable / dry-spell / excess-rain regimes and the
            percentile-band fan chart is computed.
          </li>
        </ol>
        <div className={styles.codeBlock}>
          <pre><code>
{`# 1) Configure an advisory
POST /api/v1/advisory
{
  "district": "Sonitpur",
  "crop": "sali_paddy",
  "sowing_date": "2026-06-15"
}

# 2) Receive the season profile
{
  "season_score": 72,
  "recommended_window": ["2026-06-10", "2026-06-22"],
  "risk": {
    "favorable": 0.61,
    "dry_spell": 0.21,
    "excess_rain": 0.18
  },
  "ensemble_percentiles": {
    "p10": [...], "p50": [...], "p90": [...]
  }
}`}
          </code></pre>
        </div>
      </>
    ),
  },
  {
    id: 'stack',
    title: 'Stack',
    body: (
      <>
        <p>
          The SDE solver and MCMC fit are written in Julia for speed
          (DifferentialEquations.jl + Turing.jl). The API is FastAPI on
          Vercel&apos;s serverless runtime. The frontend is a Next.js
          dashboard with custom D3 visualisations.
        </p>
      </>
    ),
  },
  {
    id: 'api',
    title: 'Endpoints',
    body: (
      <>
        <p>
          The demo exposes a small set of endpoints. The production
          API is on the roadmap.
        </p>
        <ul>
          <li><code>GET /api/v1/districts</code> — list of supported districts with crop options</li>
          <li><code>POST /api/v1/advisory</code> — run an advisory for a district / crop / sowing date</li>
          <li><code>GET /api/v1/backtest/{'{district}'}/{'{crop}'}</code> — historical backtest vs actual outturn</li>
        </ul>
      </>
    ),
  },
  {
    id: 'model',
    title: 'SDE model',
    body: (
      <>
        <p>
          The moisture state is modelled as an OU process with
          Poisson-driven jumps:
        </p>
        <div className={styles.codeBlock}>
          <pre><code>
{`dX_t = θ(μ - X_t) dt + σ dW_t + J_t dN_t

# θ  : mean-reversion speed          (fit by MCMC)
# μ  : long-run mean moisture        (fit by MCMC)
# σ  : diffusion coefficient         (fit by MCMC)
# J  : jump magnitude (rain burst)   (exponential, fit by MLE)
# N  : Poisson process, intensity λ  (fit by MCMC)`}
          </code></pre>
        </div>
        <p>
          MCMC convergence is checked via R̂ and ESS. The drift
          posterior is exposed in the dashboard so the credit officer
          can see, district by district, how confident the model is in
          its long-run mean estimate.
        </p>
      </>
    ),
  },
  {
    id: 'signals',
    title: 'Risk signals',
    body: (
      <>
        <p>
          The advisory returns three probabilities over the rest of
          the season: <strong>favorable</strong> (rainfall in the
          30th–70th percentile band, no dry spell longer than 7 days),{' '}
          <strong>dry-spell</strong> (any 7-day window below the 10th
          percentile), and <strong>excess-rain</strong> (any 3-day
          cumulative above the 95th percentile).
        </p>
        <p>
          The season score is a composite 0–100. It is not a
          probability — it is a ranking. Two districts with the same
          score may have very different underlying risk compositions.
        </p>
      </>
    ),
  },
  {
    id: 'demo',
    title: 'Live demo',
    body: (
      <>
        <p>
          The current demo is a working prototype. Select a district
          (Sonitpur, Cuttack, Malda, Yavatmal, Kurnool, Jodhpur, Indore,
          Ludhiana, Warangal, Belagavi), choose a crop, slide the sowing
          date, and read off the season score and risk composition.
        </p>
        <p>
          The backtest panel shows the model&apos;s predicted vs actual
          outturn over the last five years, per district and crop. The
          drift posterior plot is the most useful diagnostic — if the
          posterior is tight, the long-run mean is well-identified; if
          it is wide, the credit decision should lean more heavily on
          the within-season signal.
        </p>
      </>
    ),
  },
  {
    id: 'limits',
    title: 'Limitations',
    body: (
      <>
        <p>
          The MVP covers 10 of India&apos;s 700+ districts. Crops are
          limited to the major kharif staples (paddy, cotton, soybean,
          maize, groundnut). The MCMC fit is offline and refreshes
          monthly against the latest IMD gridded dataset.
        </p>
        <p>
          The model does not include price. A complete lending
          decision requires yield × price, and KharifCast currently
          supplies only the yield-side signal. A price layer using
          Agmarknet mandi data is the next milestone.
        </p>
      </>
    ),
  },
];

const stack = [
  { k: 'Model', v: 'Julia · DifferentialEquations · Turing.jl' },
  { k: 'API', v: 'FastAPI · Vercel serverless' },
  { k: 'Frontend', v: 'Next.js · D3 · Tailwind' },
];

const meta = [
  { value: 'Live', label: 'Status' },
  { value: 'v0.3 MVP', label: 'Version' },
  { value: '10 districts', label: 'Coverage' },
  { value: 'Julia · TypeScript', label: 'Stack' },
];

const actions = [
  { label: 'Visit live demo', href: 'https://frontend-chi-fawn-24.vercel.app/', external: true },
];

const endpoints = [
  { method: 'GET', path: '/api/v1/districts', desc: 'List supported districts and crop options' },
  { method: 'POST', path: '/api/v1/advisory', desc: 'Run an advisory for district / crop / sowing date' },
  { method: 'GET', path: '/api/v1/backtest/{district}/{crop}', desc: '5-year predicted vs actual outturn backtest' },
];

export default function KharifCastPage() {
  return (
    <ProjectDocShell
      liveLabel="Live demo"
      title="KharifCast"
      lede="Monsoon crop advisory for agri-lenders. District-level risk scores from an OU-jump SDE ensemble, calibrated against IMD station data."
      meta={meta}
      actions={actions}
      stack={stack}
      endpoints={endpoints}
      sideLinks={sideLinks}
      sections={sections}
    />
  );
}
