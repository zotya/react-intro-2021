import { Button } from './components/Button';
import {
  Card, CardActions, CardContent, CardHeader, CardMedia,
} from './components/Card';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
        <Card>
          <CardHeader title="My Title" subtitle="Some Subtitle" />
          <CardMedia src="http://placekitten.com/400/300" />
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia
            optio tempora voluptas explicabo eos, minus accusamus ipsa dolorem vero
            tempore! Provident corporis laboriosam laborum blanditiis animi,
            praesentium quas expedita?
          </CardContent>
          <CardActions>
            <Button>First</Button>
            <Button>Second</Button>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
