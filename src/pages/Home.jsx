import RefreshIcon from 'mdi-react/RefreshIcon';
import { useMemo } from 'react';
import { Button } from '../components/Button';
import { Filter, useFilter } from '../components/Filter';
import { Container } from '../components/Layout';
import { MoviesList } from '../components/MoviesList';
import { useFetch } from '../hooks/useFetch';

import styles from './Home.module.css';

const moviesUrl = 'http://localhost:4000/movies';
export const HomePage = () => {
  const { value: filter, ...filterProps } = useFilter();
  const url = useMemo(
    () => (filter
      ? `${moviesUrl}?q=${filter}`
      : moviesUrl),
    [filter],
  );
  const {
    data: movies,
    error,
    isLoading,
    isLoaded,
    update,
  } = useFetch(url, { autoload: true, debounce: 500 });
  const moviesIds = useMemo(
    () => (isLoaded && movies
      ? movies.map(({ id }) => ({ id }))
      : []
    ),
    [movies, isLoaded, movies],
  );
  return (
    <>
      <Container
        direction="horizontal"
        split
        center
      >
        <Filter
          id="movies-filter"
          label="Filter Movies"
          className={styles.filter}
          {...{ value: filter, ...filterProps }}
        />
        <Button onClick={update}>
          <RefreshIcon />
        </Button>
      </Container>
      <MoviesList {...{
        isLoading,
        error,
        movies,
        isLoaded,
        list: moviesIds,
      }}
      />
    </>
  );
};

export default HomePage;
