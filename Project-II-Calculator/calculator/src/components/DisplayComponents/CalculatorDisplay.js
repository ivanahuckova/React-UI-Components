import React from "react";
import "./Display.css";

export default function CalculatorDisplay({ value }) {
	return <div className="displayResult">{value}</div>;
}
