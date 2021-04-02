import AlertIcon from 'mdi-react/AlertIcon';
import { Button } from './components/Button/Button';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="default" color="invalid">Invalid Color (should be like default)</Button>
        <Button disabled>Disabled</Button>
        <hr />
        <Button variant="raised">Default</Button>
        <Button variant="raised" color="primary">Primary</Button>
        <Button variant="raised" color="secondary">Secondary</Button>
        <Button variant="raised" disabled>Disabled</Button>
        <hr />
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" disabled>Disabled</Button>
        <hr />
        <Button variant="outlined"><AlertIcon /></Button>
        <Button variant="outlined" color="primary"><AlertIcon /></Button>
        <Button variant="outlined" color="secondary"><AlertIcon /></Button>
        <Button variant="outlined" disabled><AlertIcon /></Button>
        <hr />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
