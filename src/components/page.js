import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./layout";
import Home from "./home";
import { About } from "./about";
import Works from "./work";
import "../styles/app.scss";

const Contact = () => <div>Contact</div>;

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/works",
				element: <Works />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
