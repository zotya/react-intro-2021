import { Container } from './components/Layout';
import { Movie } from './components/MoviePreview';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Container direction="vertical">
          <div>
            <ThemeToggleButton />
          </div>
          <Container direction="horizontal">
            <Movie id={1} />
            <Movie id={2} />
          </Container>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
