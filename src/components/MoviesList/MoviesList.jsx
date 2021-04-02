import { useMemo } from 'react';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../Button';
import { Card, CardHeader } from '../Card';
import { Container } from '../Layout';
import { Movie } from '../MoviePreview';

export const MoviesListPreview = ({
  list,
  update,
}) => (
  <>
    {update && (
      <Container direction="horizontal">
        <Button onClick={update}>
          <RefreshIcon />
        </Button>
      </Container>
    )}
    <Container direction="horizontal" wrap>
      {list.map(
        ({ id, ...rest }) => (
          <Movie
            key={id}
            id={id}
            {...rest}
          />
        ),
      )}
    </Container>
  </>
);

const moviesUrl = 'http://localhost:4000/movies';
export const MoviesList = () => {
  const {
    data: movies,
    error,
    isLoading,
    isLoaded,
    update,
  } = useFetch(moviesUrl, true);
  const moviesIds = useMemo(
    () => (isLoaded && movies
      ? movies.map(({ id }) => ({ id }))
      : []
    ),
    [movies, isLoaded, movies],
  );
  if (isLoading) {
    return (
      <Card>
        <CardHeader title="Loading..." />
      </Card>
    );
  }
  if (error) {
    return (
      <Card>
        <CardHeader title="Error" subtitle={error.message} />
      </Card>
    );
  }
  if (isLoaded && (!movies || (Array.isArray(movies) && movies.length === 0))) {
    return (
      <Card>
        <CardHeader title="Error" subtitle="No data" />
      </Card>
    );
  }
  return <MoviesListPreview list={moviesIds} update={update} />;
};

export default MoviesList;
