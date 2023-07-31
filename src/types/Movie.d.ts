export interface Movie {
  id: number;
  title: string;
  showcasing: boolean;
  datePremiere: Date;
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
  datePremiere: Date;
}
