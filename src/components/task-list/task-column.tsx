import { useDroppable } from "@dnd-kit/core";
import { Task, TaskColumn as ColumnTypes } from "../../types";
import TaskCard from "../task/task-card";

interface ColumnProps {
  column: ColumnTypes;
  tasks: Task[];
}

function TaskColumn({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-semibold mb-4">{column.title}</h2>
      <div ref={setNodeRef}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
