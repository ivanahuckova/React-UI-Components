import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import Button from "./components/ButtonComponents/Button";

const App = () => {
	return (
		<div className="environmentContainer">
			<div className="calculatorContainer">
				<CalculatorDisplay value={0} />
				<Button />
			</div>
		</div>
	);
};

export default App;
