import React from "react";
import { Container, SideLeft, SideRight } from "../modules/core";
import { Section } from "../modules/common";
import { innerHTML } from "../../utils/index";

import "./style.scss";

const Home = () => {
	const socialAccounts = window.bootstrap.sections.home.socialAccounts || [];
	const profileData = window.bootstrap.sections.home.profile || {};

	return (
		<Section classes={["home", "section"]}>
			<Container classes="intro-information">
				<SideLeft>
					<div className="intro-text">
						<p
							className="line-1"
							{...innerHTML(profileData.introText?.greeting)}
						/>
						<p className="line-2">
							I&apos;m a{" "}
							<span
								className="keyword"
								{...innerHTML(profileData.introText?.expertise)}
							/>
							,
						</p>
						<p className="line-3">
							specialized in{" "}
							<span
								className="keyword"
								{...innerHTML(
									profileData.introText?.specialization
								)}
							/>
							.
						</p>
					</div>
					{/* <div className="resume-box">
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
					</div> */}
				</SideLeft>
				<SideRight>
					<div className="intro-image">
						<div className="image-cover"></div>
						<img
							className="image"
							src={profileData.img?.src}
							alt={profileData.img?.alt}
						/>
					</div>
				</SideRight>
			</Container>
			<Container classes="social-accounts">
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
			</Container>
		</Section>
	);
};

export default Home;
