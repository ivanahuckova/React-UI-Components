import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const Button = () => {
	return (
		<div className="mainButtonContainer">
			<ActionButton value="clear" />
			<NumberButton buttonStyle="operationsButton" text="÷" />
			<NumberButton buttonStyle="numberButton" text="7" />
			<NumberButton buttonStyle="numberButton" text="8" />
			<NumberButton buttonStyle="numberButton" text="9" />
			<NumberButton buttonStyle="operationsButton" text="x" />
			<NumberButton buttonStyle="numberButton" text="4" />
			<NumberButton buttonStyle="numberButton" text="5" />
			<NumberButton buttonStyle="numberButton" text="6" />
			<NumberButton buttonStyle="operationsButton" text="-" />
			<NumberButton buttonStyle="numberButton" text="1" />
			<NumberButton buttonStyle="numberButton" text="2" />
			<NumberButton buttonStyle="numberButton" text="3" />
			<NumberButton buttonStyle="operationsButton" text="+" />
			<ActionButton value="0" />
			<NumberButton buttonStyle="operationsButton" text="=" />
		</div>
	);
};

export default Button;
