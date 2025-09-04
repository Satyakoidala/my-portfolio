import babelIcon from "./babel.svg";
import bootstrapIcon from "./bootstrap.svg";
import cssIcon from "./css-3.svg";
import cypressIcon from "./cypress.svg";
import djangoIcon from "./django.svg";
import gitIcon from "./git.svg";
import githubIcon from "./github.svg";
import htmlIcon from "./html-5.svg";
import javaIcon from "./java.svg";
import jsIcon from "./js.svg";
import netlifyIcon from "./netlify.svg";
import nodeIcon from "./node-js.svg";
import playwrightIcon from "./playwright.svg";
import pythonIcon from "./python.svg";
import reactIcon from "./reactjs.svg";
import scssIcon from "./scss2.svg";
import webpackIcon from "./webpack.svg";

export const icons = {
	babel: babelIcon,
	bootstrap: bootstrapIcon,
	css: cssIcon,
	cypress: cypressIcon,
	django: djangoIcon,
	git: gitIcon,
	github: githubIcon,
	html: htmlIcon,
	java: javaIcon,
	javascript: jsIcon,
	netlify: netlifyIcon,
	nodejs: nodeIcon,
	playwright: playwrightIcon,
	python: pythonIcon,
	react: reactIcon,
	scss: scssIcon,
	webpack: webpackIcon,
};

// Helper function to get icon by name
export const getIcon = (name) => icons[name?.toLowerCase() || ""] || "";
