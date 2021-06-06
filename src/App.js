import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "./components/appHeader/AppHeader";
import Home from "./views/home/Home";
import About from "./views/about/About";

const AppContainer = styled.div`
	text-align: center;
`;

const App = () => {
	return (
		<AppContainer>
			<AppHeader />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
		</AppContainer>
	);
};

export default App;
