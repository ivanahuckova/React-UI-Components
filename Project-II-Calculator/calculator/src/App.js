import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
const App = () => {
	return (
		<div className="environmentContainer">
			<div className="calculatorContainer">
				<CalculatorDisplay value={0} />
			</div>
		</div>
	);
};

export default App;
