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
				<div className="calculatorButtonContainer">
					<ActionButton />
					<NumberButton />
				</div>
			</div>
		</div>
	);
};

export default App;
