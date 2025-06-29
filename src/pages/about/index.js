import React from "react";
import { NavLink } from "react-router-dom";
import {
	Container,
	SideLeft,
	SideRight,
	SectionTile,
	Timeline,
	QuestionBox,
	Section,
} from "../../components";
import Footer from "../layout/footer";
import ProfileSummary from "./profile-summary";
import {
	ExperienceCardsHtml,
	SkillCard,
	EducationCardsHtml,
} from "./component";
import { education, experience, skills as iconSkills } from "../../assets";

import "./style.scss";

const About = () => {
	const educationDetails =
		window.bootstrap.sections.about.educationDetails || [];

	const skills = window.bootstrap.sections.about.skills || [];

	const experienceDetails =
		window.bootstrap.sections.about.experienceDetails || [];

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

			<Footer />
		</Section>
	);
};

export default About;
