import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
const App = () => {
	return (
		<div className="environmentContainer">
			<div className="calculatorContainer">
				<CalculatorDisplay />
				<ActionButton />
				<NumberButton />
			</div>
		</div>
	);
};

export default App;
