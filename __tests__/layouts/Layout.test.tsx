import { render, screen } from "@testing-library/react";

import Layout from "../../layouts/Layout";

test("It render a children component", () => {
  render(
    <Layout>
      <h1>Children</h1>
    </Layout>
  );

  expect(screen.getByText("Children")).toBeInTheDocument();
});
