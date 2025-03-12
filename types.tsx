// хз
export interface BasicAnswer {
  status_code: number;
  status_message: string;
}

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
// Участвующие в съемке фильма
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

// Изображения
export interface ImageTMDB {
  file_path: string,
  iso_639_1: string
}

export interface Images {
  backdrops: ImageTMDB[];
  posters: ImageTMDB[];
}

// Обзоры
export interface ReviewAuthor {
  name: string;
  username: string;
  avatar_path: string;
  rating: string;
}

export interface Review {
  author: string;
  author_details: ReviewAuthor;
  content: string;
  created_at: string;
  id: string;
  url: string;
}

export interface ReviewData {
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

export interface AccountStates {
  favorite: boolean;
  watchlist: boolean;
  rated: {
    value: number;
  }
}

// Кинч
export interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  release_date: string;
  rating: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  overview: string;
  production_countries: productionCountry[];
  production_companies: productionCompany[];
  runtime: number;
  images: Images;
  reviews: ReviewData;
  similar: FilmsArrayData;
  account_states: AccountStates;
  genres: Genre[]
}

// Объекты для фильмов, связанных с пользователем
export interface FilmsArrayData {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

export interface SearchParamsType {
  mainLink: string;
  params: {}
}

export interface GenreResponse {
  genres: Genre[]
}

export interface Genre {
  id: number,
  name: string
}

export interface GenreState {
  old: number[],
  new: number[]
}

export interface DateRange {
  min: number,
  max: number
}

export interface DateState {
  old: DateRange,
  new: DateRange,
  needed: boolean
}