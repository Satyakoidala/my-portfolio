import React, { useState } from "react";
import { Container } from "../../components/core";
import { Card, Section } from "../../components/common";

import "./style.scss";
import TabSwitcher from "./tab-switcher";

const Works = () => {
	const menu = window.bootstrap.sections.work.tabs || [];
	const [currSelection, updateCurrSelection] = useState(menu[0].key);

	return (
		<Section classes={["works", "section"]} roundedCorner>
			<Container classes={["tab-menu"]} columnLayout>
				{menu.map((item, key) => (
					<Card
						key={`work_menu_${key}`}
						classes={[
							currSelection === item.key ? "current" : null,
						]}
					>
						<button
							type="button"
							onClick={() => updateCurrSelection(item.key)}
						>
							{item.displayName}
						</button>
					</Card>
				))}
			</Container>
			<Container classes={["content"]} roundedCorner columnLayout>
				<TabSwitcher currSelection={currSelection} />
			</Container>
		</Section>
	);
};

export default Works;
