import { PaginationRequest } from "../interfaces/paginationRequest";
import { UsersResponse } from "../interfaces/usersResponse";
import { User } from "../interfaces/user";

const BASE_URL: string = "https://reqres.in/api";

export const getUsers = async (
  pagReq: PaginationRequest
): Promise<UsersResponse> => {
  const queryString = `?page=${pagReq.page}&per_page=${pagReq.perPage}`;
  const res = await fetch(`${BASE_URL}/users${queryString}`);
  if (res.status !== 200) {
    throw new Error("An error ocurred!");
  }
  const data = await res.json();

  return data as UsersResponse;
};

export const getUser = async (id: number): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (res.status === 404) {
    throw new Error("User not found");
  }
  if (res.status !== 200) {
    throw new Error("An error ocurred!");
  }
  const { data } = await res.json();

  return data as User;
};
