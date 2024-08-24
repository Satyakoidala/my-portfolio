import React from "react";
import cn from "classnames";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, SideLeft, SideRight } from "../container";
import Home from "../home/home";
import About from "../about/about";

import "./landing.scss";

const Works = () => <div>Works</div>;
const Contact = () => <div>Contact</div>;

const navItems = [
	{
		key: "home",
		path: "",
		linkName: "Home",
	},
	{
		key: "about",
		path: "about",
		linkName: "About",
	},
	{
		key: "works",
		path: "works",
		linkName: "Works",
	},
	{
		key: "contact",
		path: "contact",
		linkName: "Contact",
	},
];

const Page = () => {
	const [currSel, updateCurrSel] = React.useState(
		sessionStorage.getItem("active-menu-tab") || "home"
	);

	return (
		<BrowserRouter>
			<Container id="landing-page" classes={["nav-bar"]} roundedCorner>
				<SideLeft classes={["nav-left"]}>Satya</SideLeft>
				<SideRight classes={["nav-right"]}>
					<ul className="app-header">
						{navItems.map((item) => {
							return (
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events
								<li
									key={item.key}
									role="menuitem"
									className={cn("menu-item", {
										active: currSel === item.key,
									})}
								>
									<Link
										to={item.path}
										onClick={() => {
											updateCurrSel(item.key);
											sessionStorage.setItem(
												"active-menu-tab",
												item.key
											);
										}}
										/**
										 * TODO: need to add keyboard event handler to AX
										 */
									>
										{item.linkName}
									</Link>
								</li>
							);
						})}
					</ul>
				</SideRight>
			</Container>
			<Routes>
				<Route index exact path="/" element={<Home />}></Route>
				<Route exact path="/about" element={<About />}></Route>
				<Route exact path="/works" element={<Works />}></Route>
				<Route exact path="/contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Page;
