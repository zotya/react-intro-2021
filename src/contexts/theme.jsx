import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const themes = ['light', 'dark'].reduce(
  (prev, current) => ({
    ...prev,
    [current]: current,
  }),
  {},
);

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => { throw new Error('Not implemented!'); },
});

export const useThemeProvider = (defaultTheme = themes.light) => {
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(
    () => {
      switch (theme) {
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
    [theme],
  );
  const toggleTheme = useCallback(
    () => {
      setTheme((oldTheme) => (
        oldTheme === themes.light
          ? themes.dark
          : themes.light
      ));
    },
    [setTheme],
  );
  return { theme, toggleTheme };
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
