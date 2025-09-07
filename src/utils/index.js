export const innerHTML = (content) => {
	return {
		dangerouslySetInnerHTML: {
			__html: content,
		},
	};
};

export const isMobile = () => {
	const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

	return mobileMediaQuery.matches;
};

export default {
	innerHTML,
};
