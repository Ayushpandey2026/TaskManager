import { useTasks } from "../../hooks/useTasks";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks, isLoading } = useTasks();

  if (isLoading) return <p>Loading tasks...</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
