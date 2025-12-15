import axios from "../utils/axios";
import type { Task } from "../types/task.types";

export interface TaskQuery {
  status?: string;
  priority?: string;
  sortBy?: "dueDate";
}

export const getTasksApi = async (query?: TaskQuery) => {
  const res = await axios.get("/tasks", { params: query });
  return res.data as Task[];
};

export const createTaskApi = async (payload: Partial<Task>) => {
  const res = await axios.post("/tasks", payload);
  return res.data;
};

export const updateTaskApi = async (
  taskId: string,
  payload: Partial<Task>
) => {
  const res = await axios.patch(`/tasks/${taskId}`, payload);
  return res.data;
};

export const deleteTaskApi = async (taskId: string) => {
  const res = await axios.delete(`/tasks/${taskId}`);
  return res.data;
};
