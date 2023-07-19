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
