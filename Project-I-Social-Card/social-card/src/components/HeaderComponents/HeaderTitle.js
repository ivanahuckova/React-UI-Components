import React from "react";
import "./Header.css";

export default function HeaderTitle() {
	return (
		<div className="headerTitleContainer">
			<div className="headerTitle">Lambda School</div>
			<div className="headerUsername">@LambdaSchool</div>
			<ul className="headerDateUl">
				<li className="headerDateLi">26 jan</li>
			</ul>
		</div>
	);
}
