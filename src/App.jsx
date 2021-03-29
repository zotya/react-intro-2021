import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Old School
        </a>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="primary" fontSize={30} raised>Primary</Button>
        <Button
          color="secondary"
          raised
          fontSize={30}
          style={{ color: 'teal' }}
        >
          Secondary
        </Button>
      </header>
    </div>
  );
}

export default App;
