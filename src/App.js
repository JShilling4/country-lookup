import React from "react";
import { lightTheme, darkTheme } from "./assets/design/constants";
import { useDarkMode } from "./components/useDarkMode/useDarkMode";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import AppHeader from "./components/appHeader/AppHeader.js";
import Home from "./views/home/Home";

library.add(faMoon, faSun);

const AppContainer = styled.div`
	text-align: center;
`;

const App = () => {
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	if (!mountedComponent) return <div />;
	return (
		<ThemeProvider theme={themeMode}>
			<AppContainer>
				<AppHeader theme={theme} toggleTheme={themeToggler} />

				<Switch>
					<Route exact path="/">
						<Home theme={theme} />
					</Route>
				</Switch>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
