import React from "react";
import "./Button.css";

export default function ActionButton() {
	return (
		<div className="actionButtonItemsContainer">
			<div className="actionButtonRow">
				<div className="actionButton">÷</div>
			</div>
			<div className="actionButtonRow">
				<div className="actionButton">x</div>
			</div>
			<div className="actionButtonRow">
				<div className="actionButton">-</div>
			</div>
			<div className="actionButtonRow">
				<div className="actionButton">+</div>
			</div>
			<div className="actionButtonRow">
				<div className="actionButton">=</div>
			</div>
		</div>
	);
}
