import React from "react";
import { FootNotes } from "../../components";

import "./footer.scss";

export default () => {
	const socialAccounts = window.bootstrap.sections.home.socialAccounts || [];

	return (
		<footer className="footer">
			<div className="disclaimer">
				&copy; {new Date().getFullYear()} Satya Koidala. All rights
				reserved.
			</div>

			<FootNotes classes={{ footNotes: "social-accounts" }}>
				<div>Follow, Love and Support. </div>
				<ul className="social-media">
					{socialAccounts.map((item) => {
						return (
							<li className="media" key={item.key}>
								<a className={item.key} href={item.href}>
									<img src={item.src} alt={item.name} />
									<span className="media-name">
										{item.name}
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</FootNotes>
		</footer>
	);
};
