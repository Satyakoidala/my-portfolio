import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Container, SideLeft, SideRight } from "../../components/core";
import { profile } from "../../assets";

import "./style.scss";

const NavBar = () => {
	const navItems = window.bootstrap.navBarLinks;

	return (
		<Container classes={["nav-bar"]} roundedCorner>
			<SideLeft classes={["nav-left"]}>
				<div className="profile-header">
					<img src={profile} alt="profile" width={30} height={35} />
					<h1 className="title">Satya</h1>
				</div>
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
									{item.linkName.toLocaleUpperCase()}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</SideRight>
		</Container>
	);
};

export default NavBar;
