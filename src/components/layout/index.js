import React from "react";
import cn from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import { Container, SideLeft, SideRight } from "../modules/core";
import { profile } from "../../assets";

import "./style.scss";

const navItems = [
	{
		key: "home",
		path: "/",
		linkName: "Home",
	},
	{
		key: "about",
		path: "/about",
		linkName: "About",
	},
	{
		key: "works",
		path: "/works",
		linkName: "Works",
	},
	{
		key: "contact",
		path: "/contact",
		linkName: "Contact",
	},
];

const PageLayout = () => {
	return (
		<>
			<Container id="landing-page" classes={["nav-bar"]} roundedCorner>
				<SideLeft classes={["nav-left"]}>
					<img src={profile} alt="profile" width={30} height={35} />
					<h1 className="title">Satya</h1>
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
										// active: currSel === item.key,
									})}
								>
									<NavLink
										to={item.path}
										className={({ isActive }) =>
											isActive
												? "button-link active"
												: "button-link"
										}
									>
										{item.linkName}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</SideRight>
			</Container>
			<div className="root-reveal">
				<Outlet />
				{/* used for rendering the children with exact child route match */}
			</div>
		</>
	);
};

export default PageLayout;
