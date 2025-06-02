export const innerHTML = (content) => {
	return {
		dangerouslySetInnerHTML: {
			__html: content,
		},
	};
};

export default {
	innerHTML,
};
