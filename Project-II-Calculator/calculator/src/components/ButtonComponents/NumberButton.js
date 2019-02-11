import React from "react";
import "./Button.css";

export default function NumberButton() {
	return (
		<div className="numberButtonItemsContainer">
			<div className="oneItemButtonRow">clear</div>
			<div className="onlyNumbersButtonRow">
				<div className="number">
					<div>1</div>
				</div>
				<div className="number">
					<div>2</div>
				</div>
				<div className="number">
					<div>3</div>
				</div>
			</div>
			<div className="onlyNumbersButtonRow">
				<div className="number">
					<div>4</div>
				</div>
				<div className="number">
					<div>5</div>
				</div>
				<div className="number">
					<div>6</div>
				</div>
			</div>
			<div className="onlyNumbersButtonRow">
				<div className="number">
					<div>7</div>
				</div>
				<div className="number">
					<div>8</div>
				</div>
				<div className="number">
					<div>9</div>
				</div>
			</div>
			<div className="oneItemButtonRow">0</div>
		</div>
	);
}
