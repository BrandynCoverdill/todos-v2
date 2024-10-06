// @ts-nocheck
export function getCompletedPercentage(todos) {
	const percentage =
		(todos.filter((todo) => todo.isCompleted).length / todos.length) * 100;
	return Math.round(percentage);
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCompletedTodos(todos) {
	return todos.filter((todo) => todo.isCompleted).length;
}

export function checkIfJsonFile(file) {
	let valid = false;
	try {
		const fileExtension = file.name.split('.').pop().toLowerCase();
		if (fileExtension !== 'json') {
			alert('Please select a valid JSON file');
			return;
		}
		valid = true;
	} catch (error) {
		console.log(error);
	}
	return valid;
}

export function validateJsonStructure(jsonData) {
	const expectedKeys = ['id', 'isCompleted', 'text'];

	// Check if jsonData is an array
	if (!Array.isArray(jsonData)) {
		return false;
	}

	// If jsonData is empty, return true
	if (jsonData.length === 0) {
		return true;
	}

	// Create a set to store the IDs
	const ids = new Set();

	// Check each object in the array
	const isValid = jsonData.every((item) => {
		// Check if the object has the expected number of keys
		const hasCorrectNumberOfKeys =
			Object.keys(item).length === expectedKeys.length;

		// Check if the object has all the expected keys
		const hasAllExpectedKeys = Object.keys(item).every((key) => key in item);

		// Check if the ID is unique
		if (ids.has(item.id)) {
			return false;
		}
		ids.add(item.id);

		// Check if the text is a string and not empty
		const isValidText =
			typeof item.text === 'string' && item.text.trim().length > 0;

		return hasCorrectNumberOfKeys && hasAllExpectedKeys && isValidText;
	});

	return isValid;
}
