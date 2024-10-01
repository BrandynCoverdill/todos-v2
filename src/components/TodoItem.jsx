import DeleteButton from './DeleteButton';

export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
	return (
		<div className='todo-item flex flex-row'>
			<p
				className={`${todo.isCompleted ? 'todo-completed' : ''} cursor-pointer`}
				onClick={() => onToggleTodo(todo.id)}
			>
				{todo.text}
			</p>
			<DeleteButton onClick={() => onDeleteTodo(todo.id)} />
		</div>
	);
}
