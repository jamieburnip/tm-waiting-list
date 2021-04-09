import { render, screen } from "@testing-library/react";
import App from "./../pages/index";

describe("App render", () => {
  it("renders the app", () => {
    const { getByLabelText } = render(<App />);
    expect(
      screen.getByRole("heading", {
        name: "Looks like this batch of tickets has sold out!",
      })
    ).toBeInTheDocument();
  });
});
