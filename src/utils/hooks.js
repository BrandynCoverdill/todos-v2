import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		// Getting data from localStorage
		return JSON.parse(localStorage.getItem(key)) || initialValue;
	});

	useEffect(() => {
		// Setting data to localStorage
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowWidth;
}
