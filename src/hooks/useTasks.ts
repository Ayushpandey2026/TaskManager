import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasksApi, createTaskApi, updateTaskApi } from "../api/task.api";
import type { Task } from "../types/task.types";

export const useTasks = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
  queryKey: ["tasks"],
  queryFn: getTasksApi,
});


  const createTaskMutation = useMutation({
    mutationFn: createTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Task> }) =>
      updateTaskApi(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return {
    tasks: Array.isArray(data) ? (data as Task[]) : [],
    isLoading,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
  };
};
