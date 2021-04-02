import { Movie } from './components/MoviePreview';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
        <Movie id={1} />
      </div>
    </ThemeProvider>
  );
}

export default App;
