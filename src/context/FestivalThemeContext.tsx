import React, { createContext, useContext, useState, useEffect } from 'react';
import { FESTIVAL_THEMES, type ThemeKey, type FestivalTheme } from '../data/festivalThemes';

interface FestivalThemeContextType {
  themeKey: ThemeKey;
  theme: FestivalTheme;
  setThemeKey: (key: ThemeKey) => void;
}

const FestivalThemeContext = createContext<FestivalThemeContextType | undefined>(undefined);

export const FestivalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeKey, setThemeKey] = useState<ThemeKey>('diwali');

  const theme = FESTIVAL_THEMES[themeKey];

  return (
    <FestivalThemeContext.Provider value={{ themeKey, theme, setThemeKey }}>
      {children}
    </FestivalThemeContext.Provider>
  );
};

export const useFestivalTheme = (): FestivalThemeContextType => {
  const context = useContext(FestivalThemeContext);
  if (!context) {
    throw new Error('useFestivalTheme must be used within a FestivalThemeProvider');
  }
  return context;
};
