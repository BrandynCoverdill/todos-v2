// The homepage of the app
import '../styles/index.css';
import StatusBar from '../components/StatusBar';
import SideBar from '../components/SideBar';
import TodoList from '../components/TodoList';
import { useState } from 'react';
import TodoItem from '../components/TodoItem';
import AddTodoForm from '../components/AddTodoForm';
import TodoOptions from '../components/TodoOptions';
import { getCompletedTodos } from '../utils/util';
import { v4 as uuidv4 } from 'uuid';

// TODO: Create a custom hook for todo state and use localstorage to persist the state

export default function Home() {
	const [todos, setTodos] = useState([
		{
			id: uuidv4(),
			text: 'Todo 1 has a very long text that should wrap as it gets longer and longer',
			isCompleted: false,
		},
		{
			id: uuidv4(),
			text: 'Todo 2',
			isCompleted: false,
		},
		{
			id: uuidv4(),
			text: 'Todo 3',
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
					/>
				</SideBar>
			</section>
		</div>
	);
}
