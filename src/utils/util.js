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
