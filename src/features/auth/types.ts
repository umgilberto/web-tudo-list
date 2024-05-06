export interface AuthState {
  Authorization: string;
  isLogged: boolean;
}

export interface SetTokenDTO {
  Authorization: string;
  isLogged: boolean;
}
