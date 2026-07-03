export default function VectorBreak() {
  return (
    <div style={{ width: '100%', padding: '40px 0', display: 'flex', justifyContent: 'center', opacity: 0.6 }}>
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5H15M25 5H40" stroke="currentColor" strokeWidth="1" />
        <rect x="18" y="3" width="4" height="4" transform="rotate(45 18 3)" fill="currentColor" />
      </svg>
    </div>
  );
}
