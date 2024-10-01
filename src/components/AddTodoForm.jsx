import { useState } from 'react';
import Button from './Button';
import { capitalizeFirstLetter } from '../utils/util';

export default function AddTodoForm({ handleAddTodo }) {
	const [textContent, setTextContent] = useState('');

	return (
		<form
			className='add-todo-form'
			onSubmit={(e) => {
				// prevent page refresh
				e.preventDefault();

				// Capitalize first letter of the text
				const text = capitalizeFirstLetter(textContent);
				handleAddTodo(text);
				setTextContent('');

				// Focus back on the textarea
				document.querySelector('textarea').focus();
			}}
		>
			<textarea
				placeholder='What needs to be done?'
				maxLength={100}
				rows={4}
				required
				value={textContent}
				onChange={(e) => setTextContent(e.target.value)}
			/>
			<Button
				text='Add Todo'
				buttonType='primary'
				handleClick={() => {
					/* Form Submit handles this click event */
				}}
			/>
		</form>
	);
}
