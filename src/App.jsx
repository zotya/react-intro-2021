import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDebugValue } from 'react';
import { withContentRect } from 'react-measure';

import { Container } from './components/Layout';
import { ThemeProvider } from './contexts/theme';
import { Navbar } from './components/Navbar';

import { HomePage } from './pages/Home';
import { MoviePage } from './pages/Movie';

import styles from './App.module.css';

function App({ measureRef, measure, contentRect }) {
  useDebugValue(measureRef);
  useDebugValue(measure);
  useDebugValue(contentRect);
  return (
    <ThemeProvider>

      <Router>
        <div className={styles.App}>
          <Navbar>
            Movie DB
          </Navbar>
          <div ref={measureRef}>
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
          <pre>{JSON.stringify(contentRect, null, 2)}</pre>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default withContentRect(['client', 'offset', 'scroll', 'bounds', 'margin'])(App);
