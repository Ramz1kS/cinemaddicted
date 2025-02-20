export interface RequestToken {
  expires: string;
  request_token: string;
  success: boolean;
}

export interface SessionIdData {
  session_id: string;
  success: boolean;
}

export interface AccountMainData {
  avatar: {
    gravatar: {
      hash: "string"
    },
    tmdb: {
      avatar_path: "string"
    }
  };
  id: number;
  iso_3166_1: string;
  name: string;
  username: string;
}