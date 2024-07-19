'use client'

import { useTheme } from '../context/ThemeContext'

export default function ThemedComponent() {
  const { theme } = useTheme()

  return (
    <div className={`p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-2xl font-bold mb-2">Themed Component</h1>
      <p>This component changes based on the current theme: {theme}</p>
    </div>
  )
}