import type { Task } from "../../types/task.types";
import { useTasks } from "../../hooks/useTasks";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const { updateTask } = useTasks();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask({
      id: task._id,
      data: { status: e.target.value as Task["status"] },
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask({
      id: task._id,
      data: { priority: e.target.value as Task["priority"] },
    });
  };

  return (
    <div className="border rounded p-3 space-y-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>

      {/* STATUS */}
      <div>
        <label>Status:</label>
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="ml-2 border p-1"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* PRIORITY */}
      <div>
        <label>Priority:</label>
        <select
          value={task.priority}
          onChange={handlePriorityChange}
          className="ml-2 border p-1"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>

      <p className="text-xs text-gray-500">
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
}
