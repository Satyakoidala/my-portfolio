import { useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useWindowEvent = (eventName, callback) => {
	useEffect(() => {
		window.addEventListener(eventName, callback);

		return () => {
			window.removeEventListener(eventName);
		};
	}, []);
};
