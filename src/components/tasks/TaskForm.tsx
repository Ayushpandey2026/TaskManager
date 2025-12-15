import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../../schemas/task.schema";
import type { TaskFormData } from "../../schemas/task.schema";
import Button from "../common/Button";

interface Props {
  onSubmit: (data: TaskFormData) => void;
}

export default function TaskForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register("title")}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        {...register("dueDate")}
        className="w-full border p-2 rounded"
      />

      <select {...register("priority")} className="w-full border p-2 rounded">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>

      <Button type="submit">Create Task</Button>
    </form>
  );
}
