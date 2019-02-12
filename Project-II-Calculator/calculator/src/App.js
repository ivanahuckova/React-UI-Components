import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import Button from "./components/ButtonComponents/Button";

export default function App({ total }) {
	return (
		<div className="environmentContainer">
			<div className="calculatorContainer">
				<CalculatorDisplay value={total} />
				<Button />
			</div>
		</div>
	);
}
