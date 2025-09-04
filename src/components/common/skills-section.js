import React from "react";
import { getIcon } from "../../assets/icons";

const SkillsSection = () => {
	// Example skills array with icon names matching the keys in icons.js
	const skills = [
		{ name: "React", icon: "react", level: "Advanced" },
		{ name: "JavaScript", icon: "javascript", level: "Advanced" },
		{ name: "Python", icon: "python", level: "Intermediate" },
		{ name: "HTML", icon: "html", level: "Advanced" },
		{ name: "CSS", icon: "css", level: "Advanced" },
		{ name: "SCSS", icon: "scss", level: "Intermediate" },
		// Add more skills as needed
	];

	return (
		<div className="skills-grid">
			{skills.map((skill, index) => {
				const IconComponent = getIcon(skill.icon);
				return (
					<div key={index} className="skill-item">
						{IconComponent && (
							<img
								src={IconComponent}
								alt={`${skill.name} icon`}
								className="skill-icon"
							/>
						)}
						<h3>{skill.name}</h3>
						<p>{skill.level}</p>
					</div>
				);
			})}
		</div>
	);
};

export default SkillsSection;
