export default function DeleteButton({ onClick }) {
	return (
		<div className='delete-button'>
			<p className='cursor-pointer' onClick={onClick}>
				❌
			</p>
		</div>
	);
}
