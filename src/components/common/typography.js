import React from "react";
import cn from "classnames";
import "./typography.scss";

const Typography = ({ variant, children, className, ...props }) => {
	return (
		<div
			className={cn("typography", `typography-${variant}`, className)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Typography;
