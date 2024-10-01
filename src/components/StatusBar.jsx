import { getCompletedPercentage } from '../utils/util';

export default function StatusBar({ items, children }) {
	const percentage = getCompletedPercentage(items);

	return (
		<div className='status-bar'>
			<div
				className='status-bar-progress'
				style={{ width: `${percentage}%` }}
			></div>
			{children}
		</div>
	);
}
