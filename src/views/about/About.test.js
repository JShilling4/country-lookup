import { render } from "@testing-library/react";
import About from "./About";

test("renders", () => {
	render(<About />);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
