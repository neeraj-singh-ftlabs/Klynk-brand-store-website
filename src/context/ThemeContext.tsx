// context/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type Theme = 'light' | 'dark';

const themes = {
  light: {
    colors: {
      background: '#ffffff',
      text: '#000000',
    },
    fonts: {
      body: 'Arial, sans-serif',
    },
  },
  dark: {
    colors: {
      background: '#000000',
      text: '#ffffff',
    },
    fonts: {
      body: 'Helvetica, sans-serif',
    },
  },
};

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={themes[theme]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
