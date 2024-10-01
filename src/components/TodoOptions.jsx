import Button from './Button';

export default function TodoOptions({
	handleMarkAllAsCompleted,
	handleMarkAllAsIncompleted,
	handleDeleteAllCompleted,
	handleResetTodos,
}) {
	return (
		<div className='todo-options flex flex-col'>
			<Button
				text='Mark all as completed'
				buttonType='secondary'
				handleClick={handleMarkAllAsCompleted}
			/>
			<Button
				text='Mark all as not completed'
				buttonType='secondary'
				handleClick={handleMarkAllAsIncompleted}
			/>
			<Button
				text='Delete all completed todos'
				buttonType='secondary'
				handleClick={handleDeleteAllCompleted}
			/>
			<Button
				text='Delete all todos'
				buttonType='secondary'
				handleClick={handleResetTodos}
			/>
		</div>
	);
}
