export default function Button({ text, buttonType, handleClick }) {
	return (
		<button
			className={`${
				buttonType === 'primary' ? 'primary-button' : 'secondary-button'
			} cursor-pointer`}
			onClick={handleClick}
		>
			{text}
		</button>
	);
}
