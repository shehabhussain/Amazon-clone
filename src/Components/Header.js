import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input
					type="text"
					className="header__searchInput"
				/>
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__Nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">
							Hello shehab
						</span>
						<span className="header__optionLine2">
							Sign In
						</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">
							Returns
						</span>
						<span className="header__optionLine2">
							& Orders
						</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">
							Your
						</span>
						<span className="header__optionLine2">
							Prime
						</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLine2 header__basketCount">
							0
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
