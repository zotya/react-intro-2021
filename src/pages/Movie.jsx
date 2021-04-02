import { Container } from '../components/Layout';
import { Movie } from '../components/MoviePreview';

export const MoviePage = ({
  match: {
    params: {
      id,
    },
  },
}) => (
  <Container>
    <Movie id={id} />
  </Container>
);
export default MoviePage;
