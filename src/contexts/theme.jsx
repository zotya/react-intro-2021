import {
  createContext,
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useMatchMedia } from '../hooks/useMatchMedia';

const themeList = ['light', 'dark'];
const themes = themeList.reduce(
  (prev, current) => ({
    ...prev,
    [current]: current,
  }),
  {},
);

const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => { throw new Error('Not implemented!'); },
  toggleTheme: () => { throw new Error('Not implemented!'); },
  isLight: true,
  isDark: false,
});

export const useThemeProvider = () => {
  const [theme, setTheme] = useState(undefined);
  const hasSystemDarkMode = useMatchMedia('(prefers-color-scheme: dark)');
  const finalTheme = useMemo(
    () => theme || (hasSystemDarkMode ? themes.dark : themes.light),
    [theme, hasSystemDarkMode],
  );
  /**
   * Guarded version of [setTheme], to protect against setting invalid themes
   */
  const updateTheme = useCallback(
    (newTheme) => {
      if (!themeList.includes(newTheme)) {
        throw new Error(`Invalid theme! (valid: ${themeList.join(', ')})`);
      }
      setTheme(newTheme);
    },
    [setTheme],
  );
  /**
   * Shorthand for toggling theme
   */
  const toggleTheme = useCallback(
    () => {
      setTheme(
        finalTheme === themes.light
          ? themes.dark
          : themes.light,
      );
    },
    [setTheme, finalTheme],
  );
  /**
   * Change body class (theme) on theme change
   */
  useEffect(
    () => {
      switch (finalTheme) {
        case themes.light:
          if (document.body.classList.contains(themes.dark)) {
            document.body.classList.remove(themes.dark);
          }
          document.body.classList.add(themes.light);
          break;
        case themes.dark:
          if (document.body.classList.contains(themes.light)) {
            document.body.classList.remove(themes.light);
          }
          document.body.classList.add(themes.dark);
          break;
        default:
          throw new Error(`Invalid theme! (valid: ${Object.keys(themes)})`);
      }
    },
    [finalTheme],
  );
  const isLight = useMemo(
    () => finalTheme === themes.light,
    [finalTheme],
  );
  const isDark = useMemo(
    () => finalTheme === themes.dark,
    [finalTheme],
  );
  useDebugValue(isLight ? 'light' : 'dark');
  return {
    theme: finalTheme,
    toggleTheme,
    isLight,
    isDark,
    setTheme: updateTheme,
  };
};

export const ThemeProvider = ({ children }) => {
  const state = useThemeProvider();
  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
