import TodoItem from './TodoItem';

export default function TodoList({ children }) {
	return <ul className='todo-list'>{children}</ul>;
}
