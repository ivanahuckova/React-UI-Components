import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer"
const App = () => {
	return (
		<div className="environmentContainer">
			<div className="appContainer">
				<HeaderContainer />
				<CardContainer />
				<Footer />
			</div>
		</div>
	);
};

export default App;
