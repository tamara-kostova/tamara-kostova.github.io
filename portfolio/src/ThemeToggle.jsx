import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

// The boot script in index.html has already resolved the theme (stored choice, else the
// OS preference) and written it to <html> before paint, so read it back rather than
// guessing — guessing here would flip the page on hydration.
const readTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1c1411' : '#efe9df';
    try { localStorage.setItem('theme', theme); } catch { /* private mode: honour it for this page only */ }
  }, [theme]);
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  return <button type="button" className="theme-toggle" onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} aria-label={label} title={label}>
    {theme === 'dark' ? <FiSun /> : <FiMoon />}
  </button>;
}

export default ThemeToggle;
