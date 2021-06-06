import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./AppHeader";

test("renders", () => {
	render(
		<Router>
			<AppHeader />
		</Router>
	);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
