import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: "Nunito Sans", sans-serif;
        font-size: 1.6rem;
    }
    a {
        text-decoration: none;
    }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
