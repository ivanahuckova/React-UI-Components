import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
const App = () => {
	return (
		<div className="environmentContainer">
			<div className="calculatorContainer">
				<CalculatorDisplay />
				<div className="calculatorButtonContainer">
					<NumberButton />
				</div>
			</div>
		</div>
	);
};

export default App;
