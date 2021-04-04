import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from './components/Layout';
import { ThemeProvider } from './contexts/theme';
import { Navbar } from './components/Navbar';

import { HomePage } from './pages/Home';
import { MoviePage } from './pages/Movie';

import styles from './App.module.css';

function App() {
  return (
    <ThemeProvider>

      <Router>
        <div className="App">
          <Navbar>
            Movie DB
          </Navbar>
          <Container
            direction="vertical"
            className={styles.Container}
          >
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
