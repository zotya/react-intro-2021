import styles from './Navbar.module.css';

import { ThemeToggleButton } from '../ThemeToggleButton';
import { HomeButton } from '../HomeButton';
import { BackButton } from '../BackButton';

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
      <BackButton />
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
