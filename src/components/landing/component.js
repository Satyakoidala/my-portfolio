import React, { useEffect, useState } from "react";
import cn from "classnames";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, SideLeft, SideRight } from "../modules/container";
import Home from "../home/component";
import About from "../about/component";

import "./style.scss";
import { profile } from "../../assets";
import FadeTransition from "../modules/fade-transition";

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
	const [currSel, updateCurrSel] = useState(
		sessionStorage.getItem("active-menu-tab") || "home"
	);

	// const [openHome, setOpenHome] = useState(false);
	// const [openAbout, setOpenAbout] = useState(false);
	// const [openWorks, setOpenWorks] = useState(false);
	// const [openContact, setOpenContact] = useState(false);

	// useEffect(() => {
	// 	if (currSel === "home") {
	// 		setOpenHome(true);
	// 		setOpenAbout(false);
	// 		setOpenWorks(false);
	// 		setOpenContact(false);
	// 	}
	// 	if (currSel === "about") {
	// 		setOpenHome(false);
	// 		setOpenAbout(true);
	// 		setOpenWorks(false);
	// 		setOpenContact(false);
	// 	}
	// 	if (currSel === "works") {
	// 		setOpenHome(false);
	// 		setOpenAbout(false);
	// 		setOpenWorks(true);
	// 		setOpenContact(false);
	// 	}
	// 	if (currSel === "contact") {
	// 		setOpenHome(false);
	// 		setOpenAbout(false);
	// 		setOpenWorks(false);
	// 		setOpenContact(true);
	// 	}
	// }, []);

	return (
		<>
			<Container id="landing-page" classes={["nav-bar"]} roundedCorner>
				<SideLeft classes={["nav-left"]}>
					<img src={profile} alt="profile" width={30} height={35} />
					Satya
				</SideLeft>
				<SideRight classes={["nav-right"]}>
					<ul role="menu" className="app-header">
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
									<button
										type="button"
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
									</button>
								</li>
							);
						})}
					</ul>
				</SideRight>
			</Container>
			{/* <Routes>
				<Route
					index
					exact
					path="/"
					element={
						// <FadeTransition enter={currSel === "home"}>
						<Home />
						// </FadeTransition>
					}
				></Route>
				<Route
					exact
					path="/about"
					element={
						// <FadeTransition enter={currSel === "about"}>
						<About />
						// </FadeTransition>
					}
				></Route>
				<Route exact path="/works" element={<Works />}></Route>
				<Route exact path="/contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter> */}
			<div className="root-reveal">
				<FadeTransition enter={currSel === "home"}>
					<Home />
				</FadeTransition>
				<FadeTransition enter={currSel === "about"}>
					<About />
				</FadeTransition>
				<FadeTransition enter={currSel === "works"}>
					<Works />
				</FadeTransition>
				<FadeTransition enter={currSel === "contact"}>
					<Contact />
				</FadeTransition>
			</div>
		</>
	);
};

export default Page;
