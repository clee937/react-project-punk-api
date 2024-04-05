import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render the App to the page", () => {
  render(<App />);

  const app = screen.getByTestId("app");

  expect(app).toBeInTheDocument();
});
