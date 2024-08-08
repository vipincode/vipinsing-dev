'use client';
import { useTheme } from 'next-themes';
import { Icon } from '@/components/icon';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <Icon type="moon" />
      {theme === 'dark' && <Icon type="sun" />}
    </button>
  );
};

export default ThemeChanger;
