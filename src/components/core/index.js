import React from "react";
import cn from "classnames";

import "./style.scss";

export const Container = ({
	classes,
	children,
	roundedCorner = false,
	columnLayout = false,
	...rest
}) => {
	return (
		<div
			className={cn("container", classes, {
				round: roundedCorner,
				column: columnLayout,
			})}
			{...rest}
		>
			{children}
		</div>
	);
};

export const SideLeft = ({ classes, children }) => {
	return <div className={cn("side-left", classes)}>{children}</div>;
};

export const SideRight = ({ classes, children }) => {
	return <div className={cn("side-right", classes)}>{children}</div>;
};
