import { render } from "@testing-library/react";
import Index from "@root/pages/index";

describe("Index", () => {
  it("renders the page", () => {
    const result = render(<Index />);
    const helloWorld = result.container.querySelector("p");
    expect(helloWorld).toBeInTheDocument();
  });
});
