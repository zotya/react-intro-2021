import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ScrollPercentage } from 'react-scroll-percentage';

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
        <ScrollPercentage>
          {({ percentage, ref }) => (
            <div className={styles.App} ref={ref}>
              <Navbar scrollPercentage={percentage}>
                Movie DB
              </Navbar>
              <div>
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
              <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2>
              <pre>{JSON.stringify(percentage, null, 2)}</pre>
            </div>
          )}
        </ScrollPercentage>
      </Router>
    </ThemeProvider>
  );
}

export default App;
