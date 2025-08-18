import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: 'system', setTheme: () => {} });

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored) setThemeState(stored);
  }, [storageKey]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemDark = darkQuery.matches;
    const applied = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
    root.classList.remove('light', 'dark');
    root.classList.add(applied);
    window.localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  function setTheme(next: Theme) {
    setThemeState(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

