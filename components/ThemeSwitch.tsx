import { useEffect, useState } from 'react';
import styles from './styles/ThemeSwitch.module.scss';

type Theme = 'light' | 'dark';

const themedProperties = [
  'background-color',
  'background-color-alt',
  'text-color',
  'highlight-color',
  'separator-color',
  'card-color',
  'card-border-color',
  'scrollbar-track-color',
  'scrollbar-thumb-color',
  'icon-red',
  'icon-green',
  'icon-pink',
  'icon-blue',
  'icon-gray',
]

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light' as Theme);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme('dark');
    }

    setTimeout(() => {
      document.documentElement.style.setProperty('--theme-transition-time', '200ms');
    }, 500);
  }, []);

  useEffect(() => {
    for (const property of themedProperties) {
      document.documentElement.style.setProperty(`--${property}`, theme === 'light' ? '' : `var(--${property}-dark)`);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className={styles.switch}>
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}