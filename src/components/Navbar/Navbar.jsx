import styles from './Navbar.module.css';

import { ThemeToggleButton } from '../ThemeToggleButton';
import { HomeButton } from '../HomeButton';

export const Navbar = ({
  children,
}) => (
  <div
    className={styles.navbar}
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
