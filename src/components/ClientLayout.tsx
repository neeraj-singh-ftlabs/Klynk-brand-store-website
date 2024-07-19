// components/ClientLayout.tsx
"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitcher from '../components/ThemeToggle'; // Adjust path if necessary

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ClientLayout;
