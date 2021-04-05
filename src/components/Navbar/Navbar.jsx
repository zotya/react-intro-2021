import styles from './Navbar.module.css';

import { ThemeToggleButton } from '../ThemeToggleButton';
import { HomeButton } from '../HomeButton';

export const Navbar = ({
  children,
  scrollPercentage,
}) => (
  <div
    className={[
      styles.navbar,
      scrollPercentage > 0.5 ? styles.scrolledContent : ' ',
    ].filter(Boolean).join(' ')}
  >
    <div>
      <HomeButton />
    </div>
    <div>
      {children}
    </div>
    <div>
      <ThemeToggleButton />
    </div>
  </div>
);

export default Navbar;
