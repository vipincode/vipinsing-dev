'use client';
import { useTheme } from 'next-themes';
import { Icon } from '@/components/icon';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>{theme === 'light' ? <Icon type="moon" /> : <Icon type="sun" />}</button>;
};

export default ThemeToggle;
