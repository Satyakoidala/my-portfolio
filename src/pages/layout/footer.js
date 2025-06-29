import React from "react";
import { FootNotes } from "../../components";

export default () => {
	const socialAccounts = window.bootstrap.sections.home.socialAccounts || [];

	return (
		<footer className="footer">
			<p className="disclaimer">
				&copy; {new Date().getFullYear()} My Website. All rights
				reserved.
			</p>

			<FootNotes classes={{ footNotes: "social-accounts" }}>
				<span>Follow, Love and Support. </span>
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
