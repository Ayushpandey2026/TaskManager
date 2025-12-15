interface Props {
  status: string;
  priority: string;
  setStatus: (v: string) => void;
  setPriority: (v: string) => void;
}

export default function TaskFilters({
  status,
  priority,
  setStatus,
  setPriority,
}: Props) {
  return (
    <div className="flex gap-3">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Review">Review</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>
  );
}
