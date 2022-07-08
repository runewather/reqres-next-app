import { render, screen } from "@testing-library/react";

import AppBar from "../../components/Appbar/AppBar";

test("It render the title correctly", () => {
  render(<AppBar />);

  expect(screen.getByText("Reqres.in")).toBeInTheDocument();
});
