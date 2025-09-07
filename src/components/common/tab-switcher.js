import React, { useState } from "react";
import { Container } from "../core";
import { FadeTransition } from "../transitions";

import "./tab-switcher.scss";

const TabSwitcher = ({
	data = [],
	getCurrentContent = (f) => f,
	withGlassContent = false,
}) => {
	const [currSelection, updateCurrSelection] = useState(data[0]?.key || "");

	return (
		<>
			<Container classes={["tab-menu"]}>
				{data.map((item, key) => (
					<button
						key={`tab_menu_${key}`}
						type="button"
						onClick={() => updateCurrSelection(item.key)}
						className={[
							currSelection === item.key ? "current" : null,
						]}
					>
						{item.displayName}
					</button>
				))}
			</Container>
			<Container
				classes={["tab-content", withGlassContent ? "glass-bg" : ""]}
				roundedCorner
				columnLayout
			>
				<FadeTransition in appear key={currSelection} duration={500}>
					{getCurrentContent(currSelection)}
				</FadeTransition>
			</Container>
		</>
	);
};

export default TabSwitcher;
