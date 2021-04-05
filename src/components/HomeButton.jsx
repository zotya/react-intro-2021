import HomeIcon from 'mdi-react/HomeIcon';
import { Link } from 'react-router-dom';

import { Button } from './Button';

export const HomeButton = () => (
  <Link to="/">
    <Button>
      <HomeIcon />
    </Button>
  </Link>
);

export default HomeButton;
