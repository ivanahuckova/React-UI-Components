import React from "react";
import "./Card.css";

export default function CardContent() {
	return (
		<div className="cardContentContainer">
			<h3>Get Started with React</h3>
			<div className="cardContentContent">
				React makes it painless to create interactive UIs. Design simple views for each state in your application.
			</div>
			<div className="CardContentLink">reactjs.org</div>
		</div>
	);
}
