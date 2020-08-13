import React from "react";
import "./Button.css";

export default function NumberButton({ buttonStyle, text }) {
	return <button className={buttonStyle}>{text}</button>;
}
