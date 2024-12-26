export interface LoginUserDto {
  username: string;
  password: string;
}

export interface RegisterUserDto {
  cpf: string;
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface UserDto {
  cpf: string;
  email: string;
  name: string;
  lastname: string;
  phone: string;
  role: string;
  active: boolean;
  validateAccount: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserAuthenticatedDto {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  user: UserDto;
}
