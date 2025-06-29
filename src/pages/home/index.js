import React, { useEffect } from "react";
import cn from "classnames";
import { Container, SideLeft, SideRight } from "../../components/core";
import { Section } from "../../components/common";
import Footer from "../layout/footer";
import { innerHTML } from "../../utils/index";

import "./style.scss";

const IS_NOT_FIRST_TIME_LOADING = "is-not-first-time-loading";

const Home = () => {
	const profileData = window.bootstrap.sections.home.profile || {};
	const showTypingAnimation =
		sessionStorage.getItem(IS_NOT_FIRST_TIME_LOADING) === null;

	useEffect(() => {
		sessionStorage.setItem(IS_NOT_FIRST_TIME_LOADING, true);
	}, []);

	return (
		<Section classes={["home", "section"]}>
			<Container classes="intro-information">
				<SideLeft>
					<div
						className={cn("intro-text", {
							"typing-animation": showTypingAnimation,
							"fade-in-animation": !showTypingAnimation,
						})}
					>
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
			<Footer />
		</Section>
	);
};

export default Home;
