import React from "react";
// import { NavLink } from "react-router-dom";
import {
	Container,
	// SideLeft,
	// SideRight,
	SectionTile,
	Timeline,
	// QuestionBox,
	Section,
	Carousel,
	Card,
} from "../../components";
import Footer from "../layout/footer";
import ProfileSummary from "./profile-summary";
import {
	ExperienceCardsHtml,
	// SkillCard,
	EducationCardsHtml,
} from "./component";
import { getIcon } from "../../assets/icons";
// import { education, experience, skills as skillsIcon } from "../../assets";

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
			<Container
				classes="sub-section"
				columnLayout
				roundedCorner
				noPadding
			>
				<SectionTile
					classes={{ section: "work-experience" }}
					title="Experience"
					// iconHtml={
					// 	<img src={experience} alt="" width="50" height="30" />
					// }
					noCard
				>
					<Timeline
						classes={{ timeline: "timeline-horizon" }}
						cardsHtml={
							<ExperienceCardsHtml data={experienceDetails} />
						}
					/>
				</SectionTile>
				<SectionTile
					classes={{ section: "skills" }}
					title="Skills"
					// iconHtml={
					// 	<img src={skillsIcon} alt="" width="30" height="34" />
					// }
					noCard
				>
					{skills.map((section) => (
						// <SkillCard
						// 	key={section.title}
						// 	classes="skill-card"
						// 	data={section}
						// />
						<div className="skill-card" key={section.title}>
							<Carousel
								key={section.title}
								title={section.title}
								slides={section.list || []}
								renderSlide={(skill) => (
									<Card classes="skill">
										<div className="skill-name">
											{skill.name}
										</div>
										<img
											className="skill-icon"
											src={getIcon(skill.icon)}
											alt={skill.name}
										/>
									</Card>
								)}
								interval={1000}
								showArrows
							/>
						</div>
					))}
				</SectionTile>
				{/* <SectionTile
					classes={{ section: "questionnaire" }}
					noRound
					noCard
					noSectionHeader
					noColumn
				>
					<QuestionBox>
						<h3>Wanna see my work?</h3>
						<p>
							To check my work, test APIs and see live projects.
						</p>
						<NavLink to="/works">Click here</NavLink>
					</QuestionBox>
					<QuestionBox>
						<h3>Like my work?</h3>
						<p>Want to contact me?</p>
						<NavLink to="/contact">Click here</NavLink>
					</QuestionBox>
				</SectionTile> */}
				<SectionTile
					classes={{ section: "education" }}
					title="Education"
					// iconHtml={
					// 	<img
					// 		src={education}
					// 		alt="education"
					// 		width={40}
					// 		height={42}
					// 	/>
					// }
					noCard
				>
					<Timeline
						classes={{ timeline: "timeline-horizon" }}
						cardsHtml={
							<EducationCardsHtml data={educationDetails} />
						}
					/>
				</SectionTile>
			</Container>

			<Footer />
		</Section>
	);
};

export default About;
