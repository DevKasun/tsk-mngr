import {
	DndContext,
	DragEndEvent,
	useSensor,
	useSensors,
	PointerSensor,
} from '@dnd-kit/core';
import Container from '../layout/container';
import { useState } from 'react';
import { Task, TaskColumn as ColumnType } from '../../types';
import TaskColumn from '../task-list/task-column';

const COLUMNS: ColumnType[] = [
	{ id: 'TODO', title: 'To Do' },
	{ id: 'IN_PROGRESS', title: 'In Progress' },
	{ id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS: Task[] = [
	{
		id: '1',
		title: 'Research Project',
		description: 'Gather requirements and create initial documentation',
		status: 'TODO',
	},
	{
		id: '2',
		title: 'Design System',
		description: 'Create component library and design tokens',
		status: 'TODO',
	},
	{
		id: '3',
		title: 'API Integration',
		description: 'Implement REST API endpoints',
		status: 'IN_PROGRESS',
	},
	{
		id: '4',
		title: 'Testing',
		description: 'Write unit tests for core functionality',
		status: 'DONE',
	},
];

function TaskBoard() {
	const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		const taskId = active.id as string;
		const newStatus = over.id as Task['status'];

		const task = tasks.find((t) => t.id === taskId);
		if (task?.status === newStatus) return;

		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, status: newStatus } : task
			)
		);
	}

	return (
		<section>
			<Container>
				<div className='flex flex-col md:flex-row gap-4 py-8'>
					<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
						{COLUMNS.map((column) => {
							return (
								<TaskColumn
									key={column.id}
									column={column}
									tasks={tasks.filter(
										(task) => task.status === column.id
									)}
								/>
							);
						})}
					</DndContext>
				</div>
			</Container>
		</section>
	);
}

export default TaskBoard;
