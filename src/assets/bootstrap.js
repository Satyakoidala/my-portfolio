import {
	homeProfile,
	instagram,
	twitter,
	linkedin,
	github,
	// download,
} from "./index";

window.bootstrap = window.bootstrap || {};

window.bootstrap.navBarLinks = [
	{
		key: "home",
		path: "/",
		linkName: "Home",
	},
	{
		key: "about",
		path: "/about",
		linkName: "About",
	},
	{
		key: "works",
		path: "/works",
		linkName: "Works",
	},
	{
		key: "contact",
		path: "/contact",
		linkName: "Contact",
	},
];

window.bootstrap.sections = {};

window.bootstrap.sections.home = {};

window.bootstrap.sections.home.socialAccounts = [
	{
		name: "LinkedIn",
		key: "linkedin",
		href: "#linkedin",
		src: linkedin,
	},
	{
		name: "GitHub",
		key: "github",
		href: "#github",
		src: github,
	},
	{
		name: "Instagram",
		key: "instagram",
		href: "#instagram",
		src: instagram,
	},
	{
		name: "Twitter",
		key: "twitter",
		href: "#twitter",
		src: twitter,
	},
];

window.bootstrap.sections.home.profile = {
	introText: {
		greeting: "Hi&#128075;",
		expertise: "Frontend Developer",
		specialization: "ReactJS",
	},
	img: {
		name: "Profile pic",
		src: homeProfile,
		alt: "Author Picture",
	},
};

window.bootstrap.sections.about = {};

window.bootstrap.sections.about.educationDetails = [
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

window.bootstrap.sections.about.skills = [
	{
		title: "Frontend",
		list: [
			{ name: "HTML5", icon: "html" },
			{ name: "CSS3", icon: "css" },
			{ name: "Javascript", icon: "javascript" },
			{ name: "ReactJS", icon: "react" },
			{ name: "Sass", icon: "scss" },
			{ name: "Bootstrap", icon: "bootstrap" },
			{ name: "Babel.js", icon: "babel" },
			{ name: "Webpack.js", icon: "webpack" },
			// { name: "Axios", icon: "" },
		],
	},
	{
		title: "UI Test Frameworks",
		list: [
			{ name: "Cypress JS", icon: "cypress" },
			{ name: "Playwright JS", icon: "playwright" },
		],
	},
	{
		title: "Backend",
		list: [
			{ name: "Node JS", icon: "nodejs" },
			{ name: "Django", icon: "django" },
		],
	},
	{
		title: "Version Control & DevOps Tools",
		list: [
			{ name: "Git", icon: "git" },
			{ name: "GitHub Actions", icon: "github" },
			{ name: "Netlify", icon: "netlify" },
		],
	},
	{
		title: "Programming Languages",
		list: [
			{ name: "Python", icon: "python" },
			{ name: "Javascript", icon: "javascript" },
			{ name: "Java", icon: "java" },
		],
	},
];

window.bootstrap.sections.about.experienceDetails = [
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

window.bootstrap.sections.about.summary = {
	header: "About Me",
	legendHeader:
		"Frontend Engineer with 4 years’ experience delivering modern web applications using React, Node.js, and TypeScript. Skilled in scalable component design, accessibility-first development, automated testing, and CI/CD practices. Adept at collaborating with cross-functional teams to ship reliable, user-focused products.",
	additionalDetails: [
		{
			tagName: "Experience",
			value: "3+ years",
		},
		{
			tagName: "Specialization",
			value: "ReactJS",
		},
		{
			tagName: "Role",
			value: "UI Engineer",
		},
		{
			tagName: "Strengths",
			value: "Development, Leadership, Communication.",
		},
	],
};

window.bootstrap.sections.work = {
	tabs: [
		{ key: "web-apps", displayName: "Web Apps" },
		// { key: "ui-comps", displayName: "UI Comps" },
		{ key: "blogs", displayName: "Blogs" },
		{ key: "npm-modules", displayName: "Node Modules" },
		// { key: "certifications", displayName: "Certs." },
	],

	blogs: [
		{
			header: "Git Merge vs. Git Rebase",
			description: "A Beginner's Guide",
			link: "https://dev.to/satyakoidala/git-merge-vs-git-rebase-a-beginners-guide-3cki",
		},
		{
			header: "Essential Git Commands",
			description: "A Developer’s Guide",
			link: "https://dev.to/satyakoidala/essential-git-commands-a-developers-guide-4cd2",
		},
		{
			header: "CI pipeline for ReactJS apps using GitHub actions",
			description: "A Beginner's guide to create automated CI pipeline.",
			link: "https://dev.to/satyakoidala/ci-pipeline-for-reactjs-apps-using-github-actions-1k7",
		},
		{
			header: "How to get started with your first Open Source Contribution??",
			description: "A Beginner's guide to your first Open Source Project",
			link: "https://dev.to/satyakoidala/how-to-get-started-with-your-first-open-source-contribution-1epp",
		},
	],

	pkgModules: [
		{
			name: "sk-create-react-app",
			description:
				"A custom create react app automated package with starter template.",
			link: "https://www.npmjs.com/package/sk-create-react-app",
			github: "https://github.com/Satyakoidala/create-react-app-clone",
		},
	],
};
