import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

export default function HeaderContainer() {
	return (
		<div className="headerMainContainer">
			<ImageThumbnail />
			<div className="rightHeaderContainer">
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
}
