import ArrowLeftBoldIcon from 'mdi-react/ArrowLeftBoldIcon';
import { useHistory } from 'react-router-dom';

import { Button } from './Button';

export const BackButton = () => (
  <Button onClick={useHistory().goBack}>
    <ArrowLeftBoldIcon />
  </Button>
);

export default BackButton;
