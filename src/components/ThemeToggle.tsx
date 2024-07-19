// components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>Switch Theme</button>;
};

export default ThemeSwitcher;
