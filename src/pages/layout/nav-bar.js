import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Container, SideLeft, SideRight, Button } from "../../components";
import { profile } from "../../assets";
import { getIcon } from "../../assets/icons";
import { isMobile } from "../../utils";

import "./style.scss";

const NavBar = () => {
	const navItems = window.bootstrap.navBarLinks || [];
	const isMobileViewport = isMobile();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Close menu when clicking outside
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (isMenuOpen && !event.target.closest(".nav-right")) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isMenuOpen]);

	// Close menu when route changes
	React.useEffect(() => {
		setIsMenuOpen(false);
	}, [window.location.pathname]);

	return (
		<Container classes={["nav-bar"]}>
			<SideLeft classes={["nav-left"]}>
				<div className="profile-header">
					<img src={profile} alt="profile" width={30} height={35} />
					<h1 className="title">Satya Koidala</h1>
				</div>
			</SideLeft>
			<SideRight classes={["nav-right"]}>
				{isMobileViewport ? (
					<div className="mobile-menu-container">
						<Button
							className={cn("chevron-button", {
								active: isMenuOpen,
							})}
							onClick={handleMenuToggle}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
						>
							<img
								src={getIcon("chevronDown")}
								alt="menu"
								width={20}
								height={20}
								className={cn("chevron-icon", {
									rotated: isMenuOpen,
								})}
							/>
						</Button>
						<div
							id="mobile-menu"
							className={cn("mobile-menu", { open: isMenuOpen })}
							aria-hidden={!isMenuOpen}
						>
							<ul role="menu" className="mobile-menu-list">
								{navItems.map((item) => (
									<li
										key={item.key}
										role="menuitem"
										className="mobile-menu-item"
									>
										<NavLink
											to={item.path}
											className={({ isActive }) =>
												cn("mobile-menu-link", {
													active: isActive,
												})
											}
											onClick={() => setIsMenuOpen(false)}
										>
											{item.linkName.toLocaleUpperCase()}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				) : (
					<ul role="menu" className="app-header">
						{navItems.map((item) => (
							<li
								key={item.key}
								role="menuitem"
								className="menu-item"
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
						))}
					</ul>
				)}
			</SideRight>
		</Container>
	);
};

export default NavBar;
