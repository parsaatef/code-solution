import React, { PropsWithChildren, ReactElement } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import theme from "../components/styled/theme";
import Layout from "../components/template/Layout";
import { Provider } from "../app/store";
import { reducer, initialState, AppState } from "../app/reducer";

interface Props {
	Component: ReactElement;
	pageProps: PropsWithChildren<any>;
}

const MyApp: React.FC<Props> = (props) => {
	const { Component, pageProps } = props;

	const [state, dispatch] = React.useReducer(
		reducer,
		pageProps && pageProps.initialAppState
			? pageProps.initialAppState
			: initialState
	);

	React.useEffect(() => {
		if (typeof window !== "undefined")
			window.localStorage.setItem("appData", JSON.stringify(state));
	}, [state]);

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta name="theme-color" content={theme.palette.primary.main} />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					as="font"
				/>
				<link
					rel="preload"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					as="font"
				/>
			</Head>
			<Provider value={{ state, dispatch }}>
				<StyledComponentProvider theme={theme}>
					<ThemeProvider theme={theme}>
						<StylesProvider injectFirst>
							<CssBaseline />
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</StylesProvider>
					</ThemeProvider>
				</StyledComponentProvider>
			</Provider>
		</Fragment>
	);
};

export default MyApp;
