import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./fade-transition.scss";

const FadeTransition = ({ enter = false, children }) => {
	return (
		<div className="transition-wrapper">
			<TransitionGroup>
				<CSSTransition key={enter} timeout={300} classNames="fade">
					<div>{enter && children}</div>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default FadeTransition;
