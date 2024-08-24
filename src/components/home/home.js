import React from "react";
import { Container, SideLeft, SideRight } from "../container";
import {
	webDev,
	instagram,
	twitter,
	linkedin,
	github,
	download,
} from "../../assets/index";

import "./home.scss";

const Home = () => {
	const socialAccounts = [
		{
			name: "LinkedIn",
			key: "linkedin",
			href: "#linkedin",
			src: linkedin,
		},
		{
			name: "GitHub",
			key: "github",
			href: "#github",
			src: github,
		},
		{
			name: "Instagram",
			key: "instagram",
			href: "#instagram",
			src: instagram,
		},
		{
			name: "Twitter",
			key: "twitter",
			href: "#twitter",
			src: twitter,
		},
	];

	return (
		<Container classes={["home", "section"]}>
			<Container classes="intro-information">
				<SideLeft>
					<div className="intro-text">
						<span className="line-1">Hi &#128075;</span>
						<span className="line-2">
							I&apos;m a Frontend Developer,
						</span>
						<span className="line-3">specialized in ReactJS.</span>
					</div>
					<div className="resume-box">
						<button
							type="button"
							onClick={() => {
								// TODO: add resume download action
								console.log("button clicked");
							}}
						>
							<img src={download} alt="Download" />
							<span>Resume</span>
						</button>
					</div>
				</SideLeft>
				<SideRight>
					<div className="intro-image">
						<img
							className="image-profession"
							src={webDev}
							alt="web developer"
						/>
					</div>
				</SideRight>
			</Container>
			<Container classes="social-accounts">
				<ul className="social-media">
					{socialAccounts.map((item) => {
						return (
							<li className="media">
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
			</Container>
		</Container>
	);
};

export default Home;
