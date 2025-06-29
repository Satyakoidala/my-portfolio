import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/work";

import "./styles/app.scss";

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
