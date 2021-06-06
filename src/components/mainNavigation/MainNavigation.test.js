import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavigation from "./MainNavigation";

test("renders", () => {
	render(
		<Router>
			<MainNavigation />
		</Router>
	);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
