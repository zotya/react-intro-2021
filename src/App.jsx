import { Container } from './components/Layout';
import { HomePage } from './pages/Home';
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
          <HomePage />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
