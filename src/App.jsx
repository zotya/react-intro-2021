import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="invalid">Invalid Color (should be like default)</Button>
      <Button disabled>Disabled</Button>
      <hr />
      <Button raised>Default</Button>
      <Button raised color="primary">Primary</Button>
      <Button raised color="secondary">Secondary</Button>
      <Button raised disabled>Disabled</Button>
    </div>
  );
}

export default App;
