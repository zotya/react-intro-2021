import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from './components/Layout';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/theme';

import { HomePage } from './pages/Home';
import { MoviePage } from './pages/Movie';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Container direction="vertical">
            <div>
              <ThemeToggleButton />
            </div>
            <Switch>
              <Route exact path="/movie/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/">
                <h1>404</h1>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
