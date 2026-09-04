export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Tianhao Chen</span>
      <span>
        Layout adapted from{' '}
        <a href="https://github.com/LucyLing24/longling" target="_blank" rel="noopener noreferrer">Long Ling&apos;s academic website</a>.
      </span>
    </footer>
  );
}
