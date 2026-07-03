import ProjectDocShell from '../../components/ProjectDocShell';
import styles from '../project.module.css';

export const metadata = {
  title: 'SiteRisk.io — Climate Risk API — Manas Pokley',
  description:
    'Bank-ready physical climate risk for Indian properties. GEV + MCMC on ERA5, GloFAS, and CMIP6.',
};

const sideLinks = [
  { id: 'overview', label: 'Overview' },
  { id: 'how', label: 'How it works' },
  { id: 'stack', label: 'Stack' },
  { id: 'api', label: 'API endpoints' },
  { id: 'data', label: 'Data sources' },
  { id: 'model', label: 'Model notes' },
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
          SiteRisk.io is a transactional API for physical climate-risk
          assessments across Indian properties. The product targets the
          lending desk: a banker should be able to submit a coordinate
          pair and receive a bank-ready risk profile — return-period
          floods, GEV-fit temperature extremes, CMIP6 mid-century
          projection — in a single request.
        </p>
        <p>
          The current build is a pre-computed demo. The model is run
          nightly against ERA5 2023, GloFAS v4.0, and the CMIP6 CORDEX
          South-Asia domain. Endpoints return percentile bands and
          exceedance probabilities at 5, 10, 25, 50, 100, and 500-year
          return periods.
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
          The risk engine is a four-stage pipeline. The architecture is
          deliberately conservative — the goal is a defensible
          point-estimate that a credit officer can underwrite against,
          not a research-grade stochastic model.
        </p>
        <ol>
          <li>
            <strong>Location ingest.</strong> The client supplies lat/lon
            and an asset class (residential, agri-land, commercial). The
            backend resolves the asset to a hydrological catchment via a
            pre-computed HYSETS-derived lookup.
          </li>
          <li>
            <strong>ERA5 feature pull.</strong> Daily precipitation,
            2-metre temperature, and surface runoff for the matched
            grid cell, 1981–present.
          </li>
          <li>
            <strong>GEV / Gumbel fit.</strong> Annual maxima are fit to
            a Generalised Extreme Value distribution with MCMC posterior
            sampling. Convergence diagnostics are exported to the
            response payload.
          </li>
          <li>
            <strong>CMIP6 ensemble projection.</strong> The fitted GEV
            is propagated forward under SSP245 and SSP585 using the
            CORDEX South-Asia ensemble, returning a 2050 and 2100
            delta.
          </li>
        </ol>
        <div className={styles.codeBlock}>
          <pre><code>
{`# 1) Submit a location
curl -X POST https://api.siterisk.io/v1/risk \\
  -H "Content-Type: application/json" \\
  -d '{"lat": 26.1445, "lon": 91.7362, "asset_class": "residential"}'

# 2) Get the risk profile
{
  "location": {"lat": 26.1445, "lon": 91.7362, "catchment_id": "BR-15-0008"},
  "flood": {
    "return_period_100y_depth_m": 1.92,
    "exceedance_prob_30y": 0.27
  },
  "temperature": {
    "return_period_50y_max_c": 44.1,
    "ssp585_2050_delta_c": 1.8
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
          The model is implemented in Python with <code>numpyro</code>
          for the MCMC and <code>xarray</code> for the ERA5 / GloFAS
          pre-processing. The API is FastAPI on Uvicorn, deployed to
          Railway. The frontend is a Next.js dashboard with Plotly
          charts and a PDF report generator.
        </p>
      </>
    ),
  },
  {
    id: 'api',
    title: 'API endpoints',
    body: (
      <>
        <p>
          The pre-computed demo exposes three endpoints. The full API
          is on the production roadmap.
        </p>
        <ul>
          <li><code>GET /api/v1/demo/locations</code> — list of pre-computed demo cities</li>
          <li><code>GET /api/v1/demo/locations/{'{slug}'}</code> — risk profile for a demo city</li>
          <li><code>GET /healthz/demo</code> — service health and last build timestamp</li>
        </ul>
        <p>
          Response bodies include the GEV fit parameters (shape, location,
          scale), posterior convergence diagnostics (R̂, ESS), and the
          CMIP6 ensemble spread.
        </p>
      </>
    ),
  },
  {
    id: 'data',
    title: 'Data sources',
    body: (
      <>
        <ul>
          <li><strong>ERA5</strong> — ECMWF Reanalysis v5, 0.25°, 1981–present</li>
          <li><strong>GloFAS v4.0</strong> — Global Flood Awareness System, hydrological reanalysis</li>
          <li><strong>CMIP6 CORDEX</strong> — South-Asia domain, SSP245 / SSP585</li>
          <li><strong>HYSETS</strong> — Hydrological catchment boundaries for location-to-catchment lookup</li>
        </ul>
      </>
    ),
  },
  {
    id: 'model',
    title: 'Model notes',
    body: (
      <>
        <p>
          The GEV fit uses four MCMC chains with 4,000 draws each
          (1,000 warmup). Shape parameter is unconstrained. The
          location and scale priors are weakly informative
          (Normal / Half-Normal) anchored on the empirical annual
          maxima.
        </p>
        <p>
          The CMIP6 projection is a delta-method overlay: the
          ensemble-mean GEV parameters under SSP245 / SSP585 are
          rescaled against the historical baseline. This is
          intentionally simple — it is a defensible first-pass for a
          credit-officer audience. A proper non-stationary GEV with
          climate covariates is on the roadmap.
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
          The current demo is pre-computed. Try <strong>Guwahati</strong>{' '}
          (high-flood) and <strong>Leh</strong> (low-risk control) to see
          the spread. The dashboard will appear with risk bands, a
          return-period plot, and a downloadable PDF report.
        </p>
        <p>
          The <code>JSON manifest</code> endpoint exposes the full
          list of demo locations and their computed metrics.
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
          This is a demo. The pre-computed series are not for actual
          lending or compliance use. The model does not include local
          flood-defence infrastructure, building-level elevation, or
          asset-class vulnerability functions. Climate projections are
          not downscaled to property scale.
        </p>
        <p>
          A production version is in design. If you are a lender,
          insurer, or municipal planner interested in the production
          build, please reach out.
        </p>
      </>
    ),
  },
];

const stack = [
  { k: 'Backend', v: 'FastAPI · Uvicorn · Railway' },
  { k: 'Model', v: 'Python · NumPyro · xarray' },
  { k: 'Frontend', v: 'Next.js · Plotly · jsPDF' },
];

const meta = [
  { value: 'Live', label: 'Status' },
  { value: 'v0.4 demo', label: 'Version' },
  { value: 'India', label: 'Coverage' },
  { value: 'Python · TypeScript', label: 'Stack' },
];

const actions = [
  { label: 'Visit live demo', href: 'https://siterisk-demo-production.up.railway.app/', external: true },
  { label: 'JSON manifest', href: 'https://siterisk-demo-production.up.railway.app/api/v1/demo/locations', external: true },
];

const endpoints = [
  { method: 'GET', path: '/api/v1/demo/locations', desc: 'List pre-computed demo cities with computed risk metrics' },
  { method: 'GET', path: '/api/v1/demo/locations/{slug}', desc: 'Risk profile for a specific demo city (Guwahati, Leh, …)' },
  { method: 'GET', path: '/healthz/demo', desc: 'Service health, last build timestamp, manifest version' },
];

export default function SiteRiskPage() {
  return (
    <ProjectDocShell
      liveLabel="Live demo"
      title="SiteRisk.io"
      lede="Bank-ready physical climate risk for Indian properties — GEV + MCMC on ERA5, GloFAS, and CMIP6. Built for the lending desk, not the dashboard."
      meta={meta}
      actions={actions}
      stack={stack}
      endpoints={endpoints}
      sideLinks={sideLinks}
      sections={sections}
    />
  );
}
