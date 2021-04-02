import { MoviePreview } from './components/MoviePreview/MoviePreview';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

const movie = {
  id: 1,
  title: 'Star Wars: The Last Jedi',
  year: 2017,
  genre: 'Action, Adventure, Fantasy',
  plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
  poster: 'https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg',
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
        <MoviePreview movie={movie} />
      </div>
    </ThemeProvider>
  );
}

export default App;
