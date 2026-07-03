'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './topics.module.css';

const ALL_TOPICS = [
  { cat: 'Climate & Energy', title: 'Bank-ready physical climate risk for India', date: '03 Jul 2026', body: 'A walkthrough of how ERA5, GloFAS, and CMIP6 stack into a lender-facing risk API — and what to leave out.' },
  { cat: 'Climate & Energy', title: 'S2S weather prediction and monsoon risk', date: '30 Jun 2026', body: 'Why subseasonal-to-seasonal forecasts are the missing layer in agri-finance risk models.' },
  { cat: 'Climate & Energy', title: 'Geothermal economics in the Indian context', date: '24 Jun 2026', body: 'Puga, Tattapani, and Manikaran — the geology is real, the tariff math is harder.' },
  { cat: 'Climate & Energy', title: 'India solar park underperformance, 2018-2025', date: '11 Jun 2026', body: 'Bhadla, Pavagada, Rewa. The numbers, the dust, the DC/AC ratio nobody talks about.' },
  { cat: 'Sustainable Finance', title: 'Second-best paths to corporate sustainability', date: '12 Jun 2026', body: 'A response-paper summary on why a global corporate purpose is impossible — and what to do instead.' },
  { cat: 'Sustainable Finance', title: 'CBAM and the developing-country exporter', date: '06 Jun 2026', body: 'EU Carbon Border Adjustment Mechanism is live. The compliance burden lands on the wrong desks.' },
  { cat: 'Sustainable Finance', title: 'Why Scope 3 will quietly eat the next decade', date: '21 May 2026', body: 'GHG Protocol is shifting. Downstream, upstream, financed — the line items are about to be redefined.' },
  { cat: 'Agri-finance', title: 'OU-jump SDEs for crop-stress lending signals', date: '02 Jun 2026', body: 'How an Ornstein-Uhlenbeck model with Poisson jumps maps district-level rainfall into a portfolio risk score.' },
  { cat: 'Agri-finance', title: 'When temporal skew beats cumulative rainfall', date: '28 May 2026', body: 'India Ratings note: it is not the season total, it is the timing within the season. Implications for credit models.' },
  { cat: 'Agri-finance', title: 'KharifCast — a working monsoon advisory demo', date: '12 May 2026', body: 'A live demo of district-level sowing-date risk, with backtested predicted-vs-actual yield.' },
  { cat: 'Satellite & Earth Obs.', title: 'What a Jamshedpur night-light trend really says', date: '18 May 2026', body: 'NOAA/VIIRS gives you industrial growth, but it gives you air pollution too. Reading the map honestly.' },
  { cat: 'Satellite & Earth Obs.', title: 'MODIS LST — the urban heat island at Tata Steel', date: '04 May 2026', body: 'Land Surface Temperature 2015-2023 around the Jamshedpur industrial belt. The mean trend is +1.4°C.' },
  { cat: 'Satellite & Earth Obs.', title: 'Dynamic World — land cover in three clicks', date: '21 Apr 2026', body: 'A practical guide to the 10m land-cover product, with a worked example in peri-urban Bengaluru.' },
  { cat: 'Policy', title: "India's green hydrogen mission — a status check", date: '04 May 2026', body: 'SIGHT, SECI, and the 2026 milestone. The bids are in, the offtake is not.' },
  { cat: 'Policy', title: 'EU Green Deal after 2024 — what changed', date: '16 Apr 2026', body: 'CSRD is real, CSDDD has been pared back, CBAM is live. The rulebook is half-written.' },
  { cat: 'Policy', title: 'Climate litigation: a quarterly roundup', date: '02 Apr 2026', body: 'KlimSeniorinnen, the ECHR, the new duty-of-care doctrine. Cases that change what companies have to disclose.' },
  { cat: 'Climate & Energy', title: 'Heat-pump economics in Indian factories', date: '24 Mar 2026', body: 'Industrial heat is 60% of process emissions. A worked example of a textile unit in Tirupur.' },
  { cat: 'Sustainable Finance', title: 'Green bond reporting — what the ICMA guidance misses', date: '11 Mar 2026', body: 'The allocation report is easy. The impact report is where issuers quietly underperform.' },
  { cat: 'Agri-finance', title: 'The lending desk and the IMD gridded dataset', date: '26 Feb 2026', body: 'How to take 0.25° daily rainfall and turn it into something a credit officer can underwrite against.' },
  { cat: 'Satellite & Earth Obs.', title: 'Sentinel-2 for crop-stage classification', date: '12 Feb 2026', body: 'NDVI, EVI, NDWI, and a small model that picks rice transplanting week with 80% accuracy in Punjab.' },
];

const CATS = [
  'All',
  'Climate & Energy',
  'Sustainable Finance',
  'Agri-finance',
  'Satellite & Earth Obs.',
  'Policy',
];

const YEARS = ['All', '2026', '2025', '2024'];

export default function TopicsClient() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [year, setYear] = useState('All');

  const filtered = useMemo(() => {
    return ALL_TOPICS.filter((t) => {
      if (cat !== 'All' && t.cat !== cat) return false;
      if (year !== 'All' && !t.date.endsWith(year)) return false;
      if (q && !`${t.title} ${t.body} ${t.cat}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat, year]);

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div className="container">
          <p className="eyebrow">Library · topics</p>
          <h1 className={styles.title}>
            All Topics
          </h1>
          <p className={styles.lede}>
            {filtered.length} of {ALL_TOPICS.length} entries match your filters.
            Notes, drafts, papers, and the occasional rant.
          </p>
        </div>
      </header>

      <section className={styles.controls}>
        <div className="container">
          <div className={styles.controlsGrid}>
            <div className={styles.filterCol}>
              <p className={`mono ${styles.filterLabel}`}>Category</p>
              <ul className={styles.chipList}>
                {CATS.map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      className={`${styles.chip} ${cat === c ? styles.chipActive : ''}`}
                      onClick={() => setCat(c)}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.filterCol}>
              <p className={`mono ${styles.filterLabel}`}>Year</p>
              <ul className={styles.chipList}>
                {YEARS.map((y) => (
                  <li key={y}>
                    <button
                      type="button"
                      className={`${styles.chip} ${year === y ? styles.chipActive : ''}`}
                      onClick={() => setYear(y)}
                    >
                      {y}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.filterCol}>
              <p className={`mono ${styles.filterLabel}`}>Search</p>
              <input
                type="search"
                className={styles.search}
                placeholder="Filter by title, body, tag…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.empty}>No topics match. Clear filters to see everything.</p>
          ) : (
            <ul className={styles.rows}>
              {filtered.map((t, i) => (
                <li key={t.title} className={styles.row}>
                  <span className={styles.idx}>{String(i + 1).padStart(3, '0')}</span>
                  <div className={styles.body}>
                    <p className={`mono ${styles.cat}`}>{t.cat} · {t.date}</p>
                    <h2 className={styles.rowTitle}>{t.title}</h2>
                    <p className={styles.rowBody}>{t.body}</p>
                  </div>
                  <span className={styles.arrow}>→</span>
                </li>
              ))}
            </ul>
          )}
          <div className={styles.footRow}>
            <span className="mono">Page 1 of 1</span>
            <Link href="/" className="mono">← Back to home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
