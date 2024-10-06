import Button from './Button';
import { useWindowWidth } from '../utils/hooks';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function TodoOptions({
	handleMarkAllAsCompleted,
	handleMarkAllAsIncompleted,
	handleDeleteAllCompleted,
	handleResetTodos,
	handleImportTodos,
	handleExportTodos,
}) {
	const screenWidth = useWindowWidth();
	console.log(screenWidth);

	return screenWidth >= 768 ? (
		<div className='todo-options flex flex-col'>
			<Button
				text='Import Todos'
				buttonType='secondary'
				handleClick={handleImportTodos}
			/>
			<Button
				text='Export Todos'
				buttonType='secondary'
				handleClick={handleExportTodos}
			/>
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
	) : (
		<Accordion
			sx={{
				color: '#ffffff',
				backgroundColor: '#212121',
				my: 1,
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMore style={{ color: '#ffffff' }} />}
			>
				Todo Options
			</AccordionSummary>
			<AccordionDetails>
				<div className='todo-options flex flex-col'>
					<Button
						text='Import Todos'
						buttonType='secondary'
						handleClick={handleImportTodos}
					/>
					<Button
						text='Export Todos'
						buttonType='secondary'
						handleClick={handleExportTodos}
					/>
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
			</AccordionDetails>
		</Accordion>
	);
}
