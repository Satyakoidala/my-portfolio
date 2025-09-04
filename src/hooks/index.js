import { useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useWindowEvent = (eventName, callback) => {
	useEffect(() => {
		if (typeof callback !== "function") return;

		window.addEventListener(eventName, callback);
		// eslint-disable-next-line consistent-return
		return () => window.removeEventListener(eventName, callback);
	}, [eventName, callback]);
};
