import { PaginationRequest } from "../interfaces/paginationRequest";
import { UsersResponse } from "../interfaces/usersResponse";

const BASE_URL: string = "https://reqres.in/api";

export const getUsers = async (
  pagReq: PaginationRequest
): Promise<UsersResponse> => {
  const queryString = `?page=${pagReq.page}&per_page=${pagReq.perPage}`;
  const res = await fetch(`${BASE_URL}/users${queryString}`);
  const data = await res.json();

  return data as UsersResponse;
};
