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
