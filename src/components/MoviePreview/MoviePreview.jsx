import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from '../Card';

export const MoviePreview = ({
  movie: {
    title,
    year,
    genre,
    plot,
    poster,
  } = {},
}) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={`${year} (${genre})`}
    />
    <CardMedia src={poster} alt={title} />
    <CardContent>{plot}</CardContent>
  </Card>
);

export default MoviePreview;
