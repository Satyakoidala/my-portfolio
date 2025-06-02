import React from "react";
import cn from "classnames";
import _ from "lodash";

const ContentWrapper = ({
	path: bootstrapPath = "",
	classes = [],
	title = "",
	component: Component,
}) => {
	const bootstrap = _.get(
		window.bootstrap,
		`sections.work.${bootstrapPath}`,
		[]
	);

	return bootstrap ? (
		<>
			<h2 className="content-title">{title}</h2>
			<div className={cn("content-wrapper", classes)}>
				{bootstrap.map((data, index) => (
					<Component
						key={`${bootstrapPath}_${index + 1}`}
						data={data}
					/>
				))}
			</div>
		</>
	) : null;
};

export default ContentWrapper;
