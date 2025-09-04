import React from "react";
import { Card } from "../../components";
import { checkCircleDark } from "../../assets";

export const ExperienceCardsHtml = ({ data = [] }) => {
	return data.map((item, index) => {
		const { company, role, duration, graduation, description } =
			item.cardDetails;

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
				<Card>
					<div className="company">{company}</div>
					<div className="subheader">
						<div className="role">{role},</div>
						<div className="duration">{duration}</div>
					</div>
					<div className="description">{description}</div>
				</Card>
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
				<Card>
					<div className="institute">{institute}</div>
					<div>
						<div className="details">
							{degree && (
								<span className="degree">{degree}, &nbsp;</span>
							)}
							{course && <span className="course">{course}</span>}
						</div>
						{grade && <div className="grade">{grade}</div>}
						{gpa && <div className="gpa">{gpa}</div>}
						{percentage && (
							<div className="percentage">{percentage}</div>
						)}
					</div>
				</Card>
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
