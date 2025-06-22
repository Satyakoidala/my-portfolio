import React from "react";
import { Card } from "../../components/common";
import ContentWrapper from "./content-wrapper";

import "./blogs.scss";

const BlogCard = ({ data = {} }) => {
	return (
		<Card classes={["blog-card"]} data-action-type="link">
			<div className="blog-wrapper">
				<h3 className="blog-title">{data.header}</h3>
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

const Blogs = () => {
	return (
		<ContentWrapper
			path="blogs"
			component={BlogCard}
			classes={["blogs"]}
			title="Blogs"
		/>
	);
};

export default Blogs;
