import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
  dueDate: z.string(),
  priority: z.enum(["Low", "Medium", "High", "Urgent"]),
  status: z.enum(["To Do", "In Progress", "Review", "Completed"]).default("To Do"),
});

export type TaskFormData = z.infer<typeof taskSchema>;
