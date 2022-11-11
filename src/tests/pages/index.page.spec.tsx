import { render, screen } from "@testing-library/react";
import Index from "@root/pages/index.page";

describe("Index", () => {
  it("renders the title", () => {
    render(<Index />);

    const title = screen.getByText("Welcome!", {
      exact: true,
    });
    expect(title).toBeInTheDocument();
  });
});
