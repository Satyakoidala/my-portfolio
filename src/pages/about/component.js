import React from "react";
import { NavLink } from "react-router-dom";
import { Container, SideLeft, SideRight } from "../../components/core";
import {
	SectionTile,
	Timeline,
	QuestionBox,
	Card,
	Section,
} from "../../components/common";
import ProfileSummary from "./profile-summary";
import {
	checkCircleDark,
	education,
	experience,
	skills as iconSkills,
} from "../../assets";

import "./style.scss";

const educationDetails = window.bootstrap.sections.about.educationDetails || [];

const skills = window.bootstrap.sections.about.skills || [];

const experienceDetails =
	window.bootstrap.sections.about.experienceDetails || [];

const ExperienceCardsHtml = ({ data = [] }) => {
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

const EducationCardsHtml = ({ data = [] }) => {
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

const SkillCard = ({ data = {} }) => {
	return (
		<Card>
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

const About = () => {
	return (
		<Section classes={["section", "about"]} columnLayout>
			<ProfileSummary />
			<Container classes="sub-section" roundedCorner>
				<SideLeft>
					<SectionTile
						classes={{ section: "skills" }}
						title="Skills"
						iconHtml={
							<img
								src={iconSkills}
								alt=""
								width="40"
								height="42"
							/>
						}
						noCard
					>
						{skills.map((section) => (
							<SkillCard key={section.title} data={section} />
						))}
					</SectionTile>
				</SideLeft>
				<SideRight>
					<SectionTile
						classes={{ section: "work-experience" }}
						title="Experience"
						iconHtml={
							<img
								src={experience}
								alt=""
								width="70"
								height="50"
							/>
						}
						noCard
					>
						<Timeline
							cardsHtml={
								<ExperienceCardsHtml data={experienceDetails} />
							}
						/>
					</SectionTile>
					<SectionTile
						classes={{ section: "questionnaire" }}
						noRound
						noCard
						noSectionHeader
						noColumn
					>
						<QuestionBox>
							<h3>Wanna see my work?</h3>
							<p>
								To check my work, test APIs and see live
								projects.
							</p>
							<NavLink to="/works">Click here</NavLink>
						</QuestionBox>
						<QuestionBox>
							<h3>Like my work?</h3>
							<p>Want to contact me?</p>
							<NavLink to="/contact">Click here</NavLink>
						</QuestionBox>
					</SectionTile>
					<SectionTile
						classes={{ section: "education" }}
						title="Education"
						iconHtml={
							<img
								src={education}
								alt="education"
								width={60}
								height={64}
							/>
						}
						noCard
					>
						<Timeline
							cardsHtml={
								<EducationCardsHtml data={educationDetails} />
							}
						/>
					</SectionTile>
				</SideRight>
			</Container>
		</Section>
	);
};

export default About;
