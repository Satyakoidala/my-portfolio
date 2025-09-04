import React from "react";
import cn from "classnames";
import "./style.scss";

const Button = ({
	children,
	variant = "primary",
	size = "md",
	icon,
	className,
	onClick,
	...props
}) => {
	return (
		<button
			type="button"
			className={cn(
				"button",
				`button-${variant}`,
				`button-${size}`,
				className
			)}
			onClick={onClick}
			{...props}
		>
			{icon && <span className="button-icon">{icon}</span>}
			<span className="button-text">{children}</span>
		</button>
	);
};

export default Button;
