import LightThemeIcon from 'mdi-react/Brightness6Icon';
import DarkThemeIcon from 'mdi-react/Brightness4Icon';
import { useTheme } from '../contexts/theme';
import { Button } from './Button/Button';

export const ThemeToggleButton = () => {
  const { isLight, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {isLight
        ? <DarkThemeIcon />
        : <LightThemeIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
