import {
	homeProfile,
	// instagram,
	// twitter,
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
		href: "https://www.linkedin.com/in/satyakoidala/",
		src: linkedin,
	},
	{
		name: "GitHub",
		key: "github",
		href: "https://github.com/Satyakoidala",
		src: github,
	},
	// {
	// 	name: "Instagram",
	// 	key: "instagram",
	// 	href: "#instagram",
	// 	src: instagram,
	// },
	// {
	// 	name: "Twitter",
	// 	key: "twitter",
	// 	href: "#twitter",
	// 	src: twitter,
	// },
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
			degree: "Bachelor of Technology",
			course: "Computer Science Engineering",
			gpa: "8.87",
		},
	},
	{
		timeStamp: "Apr, 2017",
		cardDetails: {
			institute: "Narayana Junior College",
			degree: "Intermediate Education",
			course: "MPC",
			percentage: "97.4",
		},
	},
	{
		timeStamp: "May, 2015",
		cardDetails: {
			institute: "Priyanka's Vidyodaya High School",
			course: "SSC Board",
			gpa: "9.8",
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
		timeStamp: "Jul, 2024",
		cardDetails: {
			company: "Infosys Limited",
			role: "Specialist Programmer L2 (SDE2)",
			description:
				"🧑🏻‍💻I have been working as a frontend engineer for one of the MAANG companies as client using Micro Frontend Architecture.<br/>⚛️ Developed reusable ReactJS components and integrated with CMS to support multi-language storefronts across global markets.<br/>🎨 Translated wireframes & designs into pixel-perfect, scalable UI features, improving design-to-dev handoff speed.<br/>🌍 Enhanced cross-browser and multilingual compatibility, ensuring consistent user experience across regions.",
		},
	},
	{
		timeStamp: "Aug, 2021",
		cardDetails: {
			company: "Infosys Limited",
			role: "Specialist Programmer (SDE1)",
			description:
				"🔧 Built and maintained high-performance React apps, ensuring scalability and reliability in production environments.<br/>🧪 Implemented automated testing (Cypress, Playwright), reducing bugs and increasing deployment confidence.<br/>📈 Optimized web performance & reduced technical debt by creating reusable, maintainable components.<br/>🚀 Contributed to faster iteration cycles by streamlining frontend workflows and automation pipelines.<br/>🤝 Collaborated with cross-functional teams to deliver features aligned with business goals, consistently meeting deadlines.",
		},
	},
	// {
	// 	timeStamp: "Jul, 2021",
	// 	isGraduation: true,
	// 	cardDetails: {
	// 		graduation: "Graduated Engineering",
	// 	},
	// },
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
		{ key: "npm-modules", displayName: "Node Modules" },
		{ key: "blogs", displayName: "Blogs" },
		// { key: "certifications", displayName: "Certs." },
	],

	webApps: [
		{
			name: "chess-board-react",
			description:
				"A modern, feature-rich chess game built with React featuring timers, move validation, and polished UI",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/chess-board-react",
					rel: "noreferrer",
					target: "_blank",
				},
				{
					name: "Live",
					url: "https://react-chess-board-game.netlify.app/",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		// {
		// 	name: "my-portfolio",
		// 	description:
		// 		"A personal portfolio website built with ReactJS, featuring custom webpack and Babel setup",
		// 	links: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/Satyakoidala/my-portfolio",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 		{
		// 			name: "Live",
		// 			url: "https://satyakoidala.netlify.app/",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 	],
		// },
		{
			name: "monk-commerce",
			description:
				"Creative task by Monk Commerce for frontend developer role - eCommerce product management",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/monk-commerce",
					rel: "noreferrer",
					target: "_blank",
				},
				{
					name: "Live",
					url: "https://monk-commerce-devchef.netlify.app/",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		{
			name: "split-wise-app",
			description:
				"An application to note and split bills among friends or a group of people",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/split-wise-app",
					rel: "noreferrer",
					target: "_blank",
				},
				{
					name: "Live",
					url: "https://zippy-lolly-c9a4b3.netlify.app/",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		// {
		// 	name: "frontend-mentor.io",
		// 	description:
		// 		"Set of frontend projects done for practice including NFT preview card and media API demo",
		// 	links: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/Satyakoidala/frontend-mentor.io",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 	],
		// },
		// {
		// 	name: "chatcord-nodejs",
		// 	description:
		// 		"Real-time chat application using Node.js, Express.js, Socket.io, and Moment",
		// 	links: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/Satyakoidala/chatcord-nodejs",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 	],
		// },
		// {
		// 	name: "react-pocs",
		// 	description: "React Concepts with Demos - educational repository",
		// 	links: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/Satyakoidala/react-pocs",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 	],
		// },
		// {
		// 	name: "react-resume-builder",
		// 	description: "Resume builder application built with React",
		// 	links: [
		// 		{
		// 			name: "GitHub",
		// 			url: "https://github.com/Satyakoidala/react-resume-builder",
		// 			rel: "noreferrer",
		// 			target: "_blank",
		// 		},
		// 	],
		// },
		{
			name: "e-lib-management",
			description: "Final project - Electronic library management system",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/e-lib-management",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		{
			name: "bill-manager",
			description: "Personal ledger application for bill management",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/bill-manager",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		{
			name: "college-predictor-web-interface",
			description: "Mini project - College predictor web interface",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/college-predictor-web-interface",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
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
			name: "create-react-app-clone",
			description:
				"A custom create-react-app automated package with starter template, published on NPM",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/create-react-app-clone",
					rel: "noreferrer",
					target: "_blank",
				},
				{
					name: "NPM",
					url: "https://www.npmjs.com/package/sk-create-react-app",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
		{
			name: "create-react-app-demo-without-CRA",
			description:
				"Setup demo for creating React application without using CRA or any other framework",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/Satyakoidala/create-react-app-demo-without-CRA",
					rel: "noreferrer",
					target: "_blank",
				},
				{
					name: "NPM",
					url: "https://www.npmjs.com/package/satyakodes-cra-template",
					rel: "noreferrer",
					target: "_blank",
				},
			],
		},
	],
};
