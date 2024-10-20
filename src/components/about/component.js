import React, { Fragment } from "react";
import {
	Container,
	SideLeft,
	SideRight,
	SectionTile,
	Timeline,
	QuestionBox,
	Card,
} from "../modules/container";
import ProfileSummary from "./profile-summary";

import {
	checkCircleDark,
	education,
	experience,
	skills as iconSkills,
} from "../../assets";
import "./style.scss";

const educationDetails = [
	{
		timeStamp: "Jul, 2021",
		cardDetails: {
			institute: "Gayatri Vidya Parishad College of Engineering",
			degree: "B.Tech",
			course: "Computer Science",
			gpa: "8.87/10",
		},
	},
	{
		timeStamp: "Apr, 2017",
		cardDetails: {
			institute: "Narayana Junior College",
			degree: "Intermediate",
			course: "MPC",
			percentage: "97.4%",
		},
	},
	{
		timeStamp: "May, 2015",
		cardDetails: {
			institute: "Priyanka's Vidyodaya High School",
			course: "SSC",
			grade: "9.8/10",
		},
	},
];

const skills = [
	{
		title: "Frontend",
		list: [
			"HTML, CSS",
			"Javascript",
			"ReactJS",
			"Sass",
			"Bootstrap",
			"Babel.js",
			"Webpack.js",
			"Axios",
		],
	},
	{
		title: "UI Test Frameworks",
		list: ["Cypress JS", "Playwright JS"],
	},
	{
		title: "Backend",
		list: ["Node JS", "Django"],
	},
	{
		title: "DevOps Tools",
		list: ["Git, GitHub", "GitHub Actions", "Netlify"],
	},
	{
		title: "Programming Lang.",
		list: ["Python", "Javascript", "Java"],
	},
];

const experienceDetails = [
	{
		timeStamp: "Aug, 2021",
		cardDetails: {
			company: "Infosys Limited",
			role: "Specialist Programmer",
			duration: "Present, 3 years & 1 month",
			description:
				"I have worked as a frontend engineer for Apple Client. Developed multiple features, upgraded, tested and improved several modules using micro frontend architecture.",
		},
	},
	{
		timeStamp: "Jul, 2021",
		isGraduation: true,
		cardDetails: {
			graduation: "Graduated Engineering",
		},
	},
];

const ExperienceCardsHtml = ({ data = [] }) => {
	return data.map((item, index) => {
		const { company, role, duration, graduation, description } =
			item.cardDetails;

		return item.isGraduation ? (
			<Fragment key={index}>
				<Card>
					<span className="timestamp">{item.timeStamp}</span>
					<div className="graduation">{graduation}</div>
				</Card>
			</Fragment>
		) : (
			<Fragment key={index}>
				<Card>
					<span className="timestamp">{item.timeStamp}</span>
					<div className="company">{company}</div>
					<div className="subheader">
						<div className="role">{role},</div>
						<div className="duration">{duration}</div>
					</div>
					<div className="description">{description}</div>
				</Card>
			</Fragment>
		);
	});
};

const EducationCardsHtml = ({ data = [] }) => {
	return data.map((item, index) => {
		const { institute, degree, course, grade, gpa, percentage } =
			item.cardDetails;
		return (
			<Fragment key={index}>
				<Card>
					<span className="timestamp">{item.timeStamp}</span>
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
			</Fragment>
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
		<Container classes={["section", "about"]} columnLayout>
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
							<a href="/works">Click here</a>
							{/* convert to react-route using Link */}
							{/* <Link to="/works"></Link> */}
						</QuestionBox>
						<QuestionBox>
							<h3>Like my work?</h3>
							<p>Want to contact me?</p>
							<a href="/contact">Click here</a>
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
		</Container>
	);
};

export default About;
