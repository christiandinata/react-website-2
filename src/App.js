import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SignInPage} exact />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
