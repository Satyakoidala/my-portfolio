import React, { Fragment } from "react";
import cn from "classnames";

import "./container.scss";

export const Container = ({
	classes,
	children,
	roundedCorner = false,
	columnLayout = false,
	...rest
}) => {
	return (
		<div
			className={cn("container", classes, {
				round: roundedCorner,
				column: columnLayout,
			})}
			{...rest}
		>
			{children}
		</div>
	);
};

export const SideLeft = ({ classes, children }) => {
	return <div className={cn("side-left", classes)}>{children}</div>;
};

export const SideRight = ({ classes, children }) => {
	return <div className={cn("side-right", classes)}>{children}</div>;
};

export const Card = ({ classes, children }) => {
	return (
		<Container classes={[classes, "card"]} columnLayout roundedCorner>
			{children}
		</Container>
	);
};

export const SectionTile = ({
	classes = {},
	title,
	iconHtml,
	children,
	noCard = false,
	noRound = false,
	noColumn = false,
	noSectionHeader = false,
}) => {
	return (
		<Container
			classes={[classes.section, "section-tile"]}
			roundedCorner={!noRound}
			columnLayout={!noColumn}
		>
			{!noSectionHeader && (
				<div className="section-header">
					{iconHtml}
					{title && <h3>{title}</h3>}
				</div>
			)}
			{!noCard ? <Card>{children}</Card> : children}
		</Container>
	);
};

export const Timeline = ({ classes = {}, data, cardsHtml = "" }) => {
	return (
		<Container classes={[classes.timeline, "timeline"]}>
			<div className="timeline-thread"></div>
			<div className="timeline-cards-wrapper">
				{data
					? data.map((item, index) => {
							return (
								<Fragment key={index}>
									<Card>
										<span className="timestamp">
											{item.timeStamp}
										</span>
										{Object.keys(item.cardDetails).map(
											(key, idx) => {
												return (
													<div
														key={idx}
														className={key}
													>
														{item.cardDetails[key]}
													</div>
												);
											}
										)}
									</Card>
								</Fragment>
							);
					  })
					: cardsHtml}
			</div>
		</Container>
	);
};

export const QuestionBox = ({ classes = {}, children }) => {
	return <Card classes={[classes.question, "question"]}>{children}</Card>;
};
