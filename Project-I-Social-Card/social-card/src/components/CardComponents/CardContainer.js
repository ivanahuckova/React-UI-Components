import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

export default function CardContainer() {
	return (
		<div className="CardContainer">
			<div className="SpaceContainer" />
			<div div className="RightCardContainer">
				<CardBanner />
				<CardContent />
			</div>
		</div>
	);
}
