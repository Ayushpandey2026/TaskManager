import { useTasks } from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import type { Task } from "../../types/task.types";

interface TaskListProps {
  tasks?: Task[];
  showFilters?: boolean;
}

export default function TaskList({ tasks: propTasks }: TaskListProps) {
  const { tasks: hookTasks, isLoading } = useTasks();
  const tasks = propTasks || hookTasks;

  if (isLoading && !propTasks) return <p>Loading tasks...</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
