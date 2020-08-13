import React from "react";
import "./Header.css";

export default function HeaderTitle() {
	return (
		<div className="headerTitleContainer">
			<div className="headerTitle">
				<h4>Lambda School</h4>
			</div>
			<div className="headerUsername">
				<h5>@LambdaSchool</h5>
			</div>
			<ul className="headerDateUl">
				<li className="headerDateLi">
					<div>26 jan</div>
				</li>
			</ul>
		</div>
	);
}
