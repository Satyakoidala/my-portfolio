import React from "react";
import { Container, SideLeft } from "../../components/core";
// import { checkCircle } from "../../assets";
import { innerHTML } from "../../utils";
// import { Card } from "../../components/common";
import { useBootstrap } from "../../hooks/context/bootstrap-context";

import "./profile-summary.scss";

export default () => {
	const summary = useBootstrap("about.summary") || {};

	return (
		<Container classes="profile-summary" roundedCorner>
			<SideLeft classes="details">
				{/* eslint-disable-next-line jsx-a11y/heading-has-content */}
				<h3 className="header" {...innerHTML(summary.header)} />
				<div
					className="description"
					{...innerHTML(summary.legendHeader)}
				/>

				{/* <Container classes={["summary-cards"]} noPadding>
					{summary.additionalDetails.map((item) => {
						return (
							<Card
								key={item.tagName}
								classes={["summary-card"]}
								noPadding
							>
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
				</Container> */}
			</SideLeft>
			{/* <SideRight>
				<img alt="profile" src={profile} width={300} height={350} />
			</SideRight> */}
		</Container>
	);
};
