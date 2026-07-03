'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: 'https://www.linkedin.com/in/manas-pokley/', label: 'LinkedIn' }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Manas Pokley home">
          <span className={styles.brandMark}>M</span>
          <span className={styles.brandWord}>Manas Pokley</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href.split('#')[0]) && l.href !== '/';
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${active ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.right}>
          <span className={styles.dot} />
          <span className="mono">Open to climate-tech roles</span>
        </div>
      </div>
    </header>
  );
}
