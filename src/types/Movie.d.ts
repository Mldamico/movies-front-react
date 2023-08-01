export interface Movie {
  id: number;
  title: string;
  showcasing: boolean;
  datePremiere: string;
  poster: string;
}

export interface Response {
  nextRelease: Movie[] | undefined;
  showcasing: Movie[] | undefined;
}

interface CreateMovieProps {
  title: string;
  poster: string;
  showcasing: boolean;
  datePremiere: string;
}
