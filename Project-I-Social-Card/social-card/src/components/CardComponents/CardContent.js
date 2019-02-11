import React from "react";
import "./Card.css";

export default function CardContent() {
	return (
		<div className="CardContentContainer">
			<h3>Get Started with React</h3>

			<div className="CardContentContent">
				React makes it painless to create interactive UIs. Design simple views for each state in your application
			</div>
			<div className="CardContentLink">reactjs.org</div>
		</div>
	);
}
