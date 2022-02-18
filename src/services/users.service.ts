import api from "../modules/http.client";
import type { APIResponse, UsersResponse } from "@/types/response.types";
import type { User } from "@/types/entity.types";

export const GetUsers = async (): Promise<APIResponse<UsersResponse>> => {
  try {
    const { data } = await api.get<UsersResponse>("/usuarios");
    return [null, data];
  } catch (error: unknown) {
    return [error as Error];
  }
};

export const GetUser = async (id: string): Promise<APIResponse<User>> => {
  try {
    const { data } = await api.get<User>(`/usuarios/${id}`);
    return [null, data];
  } catch (error: unknown) {
    return [error as Error];
  }
};
