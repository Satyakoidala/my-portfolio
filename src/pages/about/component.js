import React from "react";
import { Card, Container } from "../../components";
import { checkCircleDark } from "../../assets";
import { innerHTML } from "../../utils";

export const ExperienceCardsHtml = ({ data = [] }) => {
	return data.map((item, index) => {
		const { company, role, graduation, description } = item.cardDetails;

		return item.isGraduation ? (
			<div className="timeline-card" key={index}>
				<div className="timestamp">{item.timeStamp}</div>
				<Card>
					<div className="graduation">{graduation}</div>
				</Card>
			</div>
		) : (
			<div className="timeline-card" key={index}>
				<div className="timestamp">{item.timeStamp}</div>
				<Container classes={["card"]} roundedCorner>
					<div className="role">{role}</div>
					<div className="company">{company}</div>
					<div className="description" {...innerHTML(description)} />
				</Container>
			</div>
		);
	});
};

export const EducationCardsHtml = ({ data = [] }) => {
	return data.map((item, index) => {
		const { institute, degree, course, grade, gpa, percentage } =
			item.cardDetails;
		return (
			<div className="timeline-card" key={index}>
				<div className="timestamp">{item.timeStamp}</div>
				<Container classes={["card"]} roundedCorner>
					<div className="details">
						{degree && <span className="degree">{degree}</span>}
						{course && <span className="course">{course}</span>}
					</div>
					{grade && <div className="grade">{grade}</div>}
					{gpa && <div className="gpa">{gpa}</div>}
					{percentage && (
						<div className="percentage">{percentage}</div>
					)}
					<div className="institute">{institute}</div>
				</Container>
			</div>
		);
	});
};

export const SkillCard = ({ data = {}, ...rest }) => {
	return (
		<Card {...rest}>
			<ul>
				<legend>{data.title}</legend>
				<li></li>
				{data.list.map((item) => {
					return (
						<li key={item}>
							<img
								src={checkCircleDark}
								alt="checkbox"
								width={15}
								height={15}
							/>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>
		</Card>
	);
};
