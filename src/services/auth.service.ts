import api from "../modules/http.client";
import type { APIResponse, LoginResponse } from "@/types/response.types";

export default {
  async Login(
    email: string,
    password: string
  ): Promise<APIResponse<LoginResponse>> {
    try {
      const { data } = await api.post<LoginResponse>("/login", {
        email,
        password,
      });
      return [null, data];
    } catch (error: unknown) {
      return [error as Error];
    }
  },
};
