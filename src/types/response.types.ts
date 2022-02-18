import type { User } from "./entity.types";

export type APIResponse<T> = [null, T] | [Error];

export interface LoginResponse {
  message: string;
  authorization: string;
}

export interface UsersResponse {
  quantidade: number;
  usuarios: User[];
}
