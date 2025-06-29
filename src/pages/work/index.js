import React, { useState } from "react";
import { Container } from "../../components/core";
import { Card } from "../../components/common";
import Footer from "../layout/footer";
import TabSwitcher from "./tab-switcher";

import "./style.scss";

const Works = () => {
	const menu = window.bootstrap.sections.work.tabs || [];
	const [currSelection, updateCurrSelection] = useState(menu[0].key);

	return (
		<div className="works section">
			<Container classes={["tab-menu"]}>
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

			<Footer />
		</div>
	);
};

export default Works;
