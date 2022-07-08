import { render, screen } from "@testing-library/react";

import CardsWrapper from "../../containers/CardsWrapper/CardsWrapper";

import { User } from "../../interfaces/user";

const users: Array<User> = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
];

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve({ data: users }) as Promise<any>,
    }) as Promise<any>;
});

test("It should render the User cards", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    isReady: true,
    query: { page: 1, perPage: 4 },
  }));
  render(<CardsWrapper />);

  users.forEach(async (u) =>
    expect(await screen.findByText(u.email)).toBeInTheDocument()
  );
});
