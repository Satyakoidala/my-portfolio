import React from "react";
import { Container, SideLeft, SideRight } from "../modules/container";
import { checkCircle } from "../../assets";

import "./profile-summary.scss";

export default () => {
	return (
		<Container classes="profile-summary" roundedCorner>
			<SideLeft classes="details">
				<h3>Hi! I&apos;m Satya Koidala, </h3>
				<ul>
					<legend>
						I&apos;m a professional experienced in UI development
						and automation testing.
					</legend>
					<li>
						<img
							src={checkCircle}
							alt="checkbox"
							width={15}
							height={15}
						/>
						<span className="tag">Experience:</span>
						<span className="value">
							3+ years as a UI developer.
						</span>
					</li>
					<li>
						<img
							src={checkCircle}
							alt="checkbox"
							width={15}
							height={15}
						/>
						<span className="tag">Specialization:</span>
						<span className="value">
							Creating webpages using ReactJS and frontend
							fundamentals.
						</span>
					</li>
					<li>
						<img
							src={checkCircle}
							alt="checkbox"
							width={15}
							height={15}
						/>
						<span className="tag">Roles:</span>
						<span className="value">
							Team Player, Lead, Sole Developer.
						</span>
					</li>
					<li>
						<img
							src={checkCircle}
							alt="checkbox"
							width={15}
							height={15}
						/>
						<span className="tag">Strengths:</span>
						<span className="value">
							Strong blend of development skills, leadership
							abilities, detail and deadline oriented delivering
							with effective communication.
						</span>
					</li>
				</ul>
			</SideLeft>
			{/* <SideRight>
				<img alt="profile" src={profile} width={300} height={350} />
			</SideRight> */}
		</Container>
	);
};
