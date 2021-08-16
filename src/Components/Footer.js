import React from "react";
import "./footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<h5>© Shehab Hussain {year}</h5>
		</div>
	);
};

export default Footer;
