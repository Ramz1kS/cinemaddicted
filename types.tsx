// Объекты под аутентификацию

export interface RequestToken {
  expires: string;
  request_token: string;
  success: boolean;
}

export interface SessionIdData {
  session_id: string;
  success: boolean;
}

// Объекты под данные аккаунта
export interface AccountMainData {
  avatar: {
    gravatar: {
      hash: string
    },
    tmdb: {
      avatar_path: string
    }
  };
  id: number;
  iso_3166_1: string;
  name: string;
  username: string;
}

// Объекты для информации по фильму
export interface CastMember {
  name: string;
  profile_path: string;
  id: number;
  character: string;
}

export interface CrewMember {
  name: string;
  department: string;
  job: string;
  profile_path: string;
  id: number;
}

export interface Credits {
  crew: CrewMember[];
  cast: CastMember[]
}

export interface productionCompany {
  name: string;
}

export interface productionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ImageTMDB {
  file_path: string,
  iso_639_1: string
}

export interface Images {
  backdrops: ImageTMDB[];
  posters: ImageTMDB[];
}

export interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  // original_language: string;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  overview: string;
  production_countries: productionCountry[];
  production_companies: productionCompany[];
  runtime: number;
  images: Images
}

// Объекты для фильмов, связанных с пользователем
export interface FilmsArrayData {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}
