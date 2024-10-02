// @ts-nocheck
// The homepage of the app
import '../styles/index.css';
import StatusBar from '../components/StatusBar';
import SideBar from '../components/SideBar';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import AddTodoForm from '../components/AddTodoForm';
import TodoOptions from '../components/TodoOptions';
import {
	getCompletedTodos,
	checkIfJsonFile,
	validateJsonStructure,
} from '../utils/util';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../utils/hooks';

export default function Home() {
	const [todos, setTodos] = useLocalStorage('todos', [
		{
			id: uuidv4(),
			text: "To complete a todo, click on it's text!",
			isCompleted: false,
		},
	]);

	const handleDeleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleCompleteTodo = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isCompleted: !todo.isCompleted,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleAddTodo = (text) => {
		setTodos((prev) => [
			...prev,
			{ id: uuidv4(), text: text, isCompleted: false },
		]);
	};

	const handleMarkAllAsCompleted = () => {
		const newTodos = todos.map((prev) => {
			return {
				...prev,
				isCompleted: true,
			};
		});
		setTodos(newTodos);
	};

	const handleMarkAllAsIncompleted = () => {
		const newTodos = todos.map((prev) => {
			return {
				...prev,
				isCompleted: false,
			};
		});
		setTodos(newTodos);
	};

	const handleDeleteAllCompleted = () => {
		const newTodos = todos.filter((prev) => !prev.isCompleted);
		setTodos(newTodos);
	};

	const handleImportTodos = () => {
		// Create a 'input' element
		const input = document.createElement('input');

		// Set its type
		input.type = 'file';

		// Set it's accepted file types
		input.accept = '.json';

		// Apply a style to prevent its display
		input.style.display = 'none';

		// Listen for the 'change' event
		input.addEventListener('change', (e) => {
			// Get the file
			const file = e.target.files[0];

			// Check if the file is a valid JSON file
			if (!checkIfJsonFile(file)) {
				return;
			}

			// Use FileReader to read the file
			const reader = new FileReader();

			// Read the file
			reader.readAsText(file);

			reader.onload = async (e) => {
				// Parse the JSON
				const data = await JSON.parse(e.target.result);

				// Check if the JSON is valid
				if (!validateJsonStructure(data)) {
					alert('Invalid JSON file');
					return;
				}

				// Set the state
				setTodos(data);
			};
		});

		// Attach it to the document
		document.body.appendChild(input);

		// Click it
		input.click();

		// Remove it from the document
		document.body.removeChild(input);
	};

	const handleExportTodos = () => {
		// JSON object is converted to a string. null and 2 are used for indentation.
		const jsonString = JSON.stringify(todos, null, 2);

		// Create a Blob with the data we want to download as a file
		const blob = new Blob([jsonString], { type: 'application/json' });

		// Create a link to download it
		const href = URL.createObjectURL(blob);

		// Create a "a" element to be used as a clickable link
		const link = document.createElement('a');

		// Clicking the link triggers the download
		link.href = href;

		// Name of the file
		link.download = 'todos.json';

		// Add the link to the DOM
		document.body.appendChild(link);

		// Click the link
		link.click();

		// Cleanup
		document.body.removeChild(link);

		console.log('Exported:\n', jsonString);
	};

	return (
		<div className='home-container'>
			<StatusBar items={todos}>
				<p className='percentage-text'>{`${getCompletedTodos(todos)} of ${
					todos.length
				} completed`}</p>
			</StatusBar>
			<section className='w-full todo-sidebar-section'>
				<TodoList>
					{todos.length === 0 && <p>Add a todo to get started</p>}
					<div className='flex flex-col gap-1'>
						{todos.map((todo) => {
							return (
								<TodoItem
									key={todo.id}
									todo={todo}
									onDeleteTodo={handleDeleteTodo}
									onToggleTodo={handleCompleteTodo}
								/>
							);
						})}
					</div>
				</TodoList>
				<SideBar>
					<AddTodoForm handleAddTodo={handleAddTodo} />
					<TodoOptions
						handleDeleteAllCompleted={handleDeleteAllCompleted}
						handleMarkAllAsCompleted={handleMarkAllAsCompleted}
						handleMarkAllAsIncompleted={handleMarkAllAsIncompleted}
						handleResetTodos={() => setTodos([])}
						handleImportTodos={handleImportTodos}
						handleExportTodos={handleExportTodos}
					/>
				</SideBar>
			</section>
		</div>
	);
}
