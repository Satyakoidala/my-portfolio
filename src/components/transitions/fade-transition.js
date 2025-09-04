import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./fade-transition.scss";

const FadeTransition = ({
	in: inProp,
	appear = true,
	timeout = 300,
	unmountOnExit = true,
	children,
	className,
	onEnter,
	onEntering,
	onEntered,
	onExit,
	onExiting,
	onExited,
}) => {
	const nodeRef = useRef(null);

	return (
		<CSSTransition
			in={inProp}
			appear={appear}
			timeout={timeout}
			classNames="fade"
			unmountOnExit={unmountOnExit}
			nodeRef={nodeRef}
			onEnter={(node) => {
				if (onEnter) onEnter(node);
			}}
			onEntering={(node) => {
				if (onEntering) onEntering(node);
			}}
			onEntered={(node) => {
				if (onEntered) onEntered(node);
			}}
			onExit={(node) => {
				if (onExit) onExit(node);
			}}
			onExiting={(node) => {
				if (onExiting) onExiting(node);
			}}
			onExited={(node) => {
				if (onExited) onExited(node);
			}}
		>
			<div ref={nodeRef} className={className}>
				{children}
			</div>
		</CSSTransition>
	);
};

FadeTransition.propTypes = {
	in: PropTypes.bool.isRequired,
	appear: PropTypes.bool,
	timeout: PropTypes.number,
	unmountOnExit: PropTypes.bool,
	className: PropTypes.string,
	onEnter: PropTypes.func,
	onEntering: PropTypes.func,
	onEntered: PropTypes.func,
	onExit: PropTypes.func,
	onExiting: PropTypes.func,
	onExited: PropTypes.func,
	children: PropTypes.node.isRequired,
};

FadeTransition.defaultProps = {
	appear: true,
	timeout: 300,
	unmountOnExit: true,
	className: "page-transition",
	onEnter: undefined,
	onEntering: undefined,
	onEntered: undefined,
	onExit: undefined,
	onExiting: undefined,
	onExited: undefined,
};

export default FadeTransition;
