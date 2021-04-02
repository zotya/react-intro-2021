import { Container } from './components/Layout';
import { MoviesList } from './components/MoviesList';
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
          <MoviesList />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
