import React from "react";
import "./Home.css";
import Product from "./Product.js";

const Home = () => {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Shershaah/Launch/1500x600_Hero-Tall_NP._CB644249299_.jpg"
				alt=""
			/>
			<div className="home__row">
				<Product
					id="5874"
					title="dji Osmo Osmo Action Sports and Action Camera  (Grey, Silver, 12 MP)"
					price={"20,999"}
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/jvv9zm80/sports-action-camera/p/t/k/action-osmo-action-dji-original-imafgh5wtk2gqzvv.jpeg"
				/>
				<Product
					id="1254"
					title="APPLE iPhone 12 (Blue, 128 GB)"
					price={"82,900"}
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="3254"
					title="APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGND3HN/A  (13.3 inch, Gold, 1.29 kg)"
					price="88,990"
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg"
				/>
				<Product
					id="9512"
					title="Canon EOS 80D DSLR Camera Body with Single Lens: EF-S 18-135 IS USM  (Black)"
					price="91,000"
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/jefzonk0/dslr-camera/g/v/r/eos-80d-80d-canon-original-imaf329wfqqyawwx.jpeg"
				/>
				<Product
					id="2587"
					title="MICROSOFT Surface Laptop 3 Ryzen 5 Quad Core 3580U - (8 GB/128 GB SSD/Windows 10 Home) 1873 Laptop  (15 inch, Platinum, 1.54 kg)"
					price="99,999"
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/k9he0sw0/computer/m/h/d/microsoft-original-imafr9qyecvfeyta.jpeg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="65412"
					title="MICROSOFT Xbox Series S 512 GB  (White)"
					price="35,000"
					rating={4}
					image="https://rukminim1.flixcart.com/image/416/416/kfbfr0w0/gamingconsole/b/n/a/rrs-00022-512-xbox-yes-original-imafvsyhpuuspgba.jpeg"
				/>
			</div>
		</div>
	);
};

export default Home;
