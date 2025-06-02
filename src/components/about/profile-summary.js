import React from "react";
import { Container, SideLeft, SideRight } from "../modules/core";
// import { checkCircle } from "../../assets";
import { innerHTML } from "../../utils";

import "./profile-summary.scss";
import { Card } from "../modules/common";

const summary = window.bootstrap.sections.about.summary || {};

export default () => {
	return (
		<Container classes="profile-summary" roundedCorner>
			<SideLeft classes="details">
				{/* eslint-disable-next-line jsx-a11y/heading-has-content */}
				<h3 className="header" {...innerHTML(summary.header)} />
				<div
					className="sub-header"
					{...innerHTML(summary.legendHeader)}
				/>
				<Container classes={["summary-cards"]}>
					{summary.additionalDetails.map((item) => {
						return (
							<Card key={item.tagName} classes={["summary-card"]}>
								{/* <img
											src={checkCircle}
											alt="checkbox"
											width={15}
											height={15}
										/> */}
								<div
									className="tag"
									{...innerHTML(item.tagName)}
								/>
								<div
									className="value"
									{...innerHTML(item.value)}
								/>
							</Card>
						);
					})}
				</Container>
			</SideLeft>
			{/* <SideRight>
				<img alt="profile" src={profile} width={300} height={350} />
			</SideRight> */}
		</Container>
	);
};
