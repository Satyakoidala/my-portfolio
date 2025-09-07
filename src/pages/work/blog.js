import React from "react";
import { Card } from "../../components";
import { isMobile } from "../../utils";

import "./blog.scss";

const Blog = ({ data = {} }) => {
	const isMobileViewport = isMobile();

	return (
		<Card classes={["blog"]} data-action-type="link">
			<div className="blog-wrapper">
				<h3 className="blog-title">
					{data.header}
					{isMobileViewport && <>&nbsp;&#8599;</>}
				</h3>
				<div className="blog-desc">{data.description}</div>
			</div>
			<a
				data-action-trigger-link
				className="blog-link hidden"
				href={data.link}
				rel="noreferrer"
				target="_blank"
			>
				Read here&#8599;
			</a>
		</Card>
	);
};

export default Blog;
