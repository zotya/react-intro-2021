import LightThemeIcon from 'mdi-react/Brightness6Icon';
import DarkThemeIcon from 'mdi-react/Brightness4Icon';
import { useTheme, themes } from '../contexts/theme';
import { Button } from './Button/Button';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {theme === themes.light
        ? <DarkThemeIcon />
        : <LightThemeIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
