import { useMemo } from 'react';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { useFetch } from '../../hooks/useFetch';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from '../Card';
import { Button } from '../Button';

export const MoviePreview = ({
  movie: {
    title,
    year,
    genre,
    plot,
    poster,
  } = {},
  update,
}) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={`${year} (${genre})`}
    />
    <CardMedia src={poster} alt={title} />
    <CardContent>{plot}</CardContent>
    {update && (
    <CardActions>
      <span />
      <Button onClick={update}>
        <RefreshIcon />
        {' '}
      </Button>
    </CardActions>
    )}
  </Card>
);

export const Movie = ({
  id,
  ...rest
}) => {
  const url = useMemo(
    () => `http://localhost:4000/movies/${id}`,
    [id],
  );
  const {
    data: movie,
    error,
    isLoading,
    isLoaded,
    update,
  } = useFetch(url, true);
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
  if (isLoaded && !movie) {
    return (
      <Card>
        <CardHeader title="Error" subtitle="No data" />
      </Card>
    );
  }
  return <MoviePreview {...rest} movie={movie} update={update} />;
};

export default MoviePreview;
