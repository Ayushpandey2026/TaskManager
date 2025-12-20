import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasksApi, createTaskApi, updateTaskApi } from "../api/task.api";
import type { Task } from "../types/task.types";
import { useAuth } from "./useAuth";

export const useTasks = (filters?: { status?: string; priority?: string; sortBy?: "dueDate" }) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", filters],
    queryFn: () => getTasksApi(),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  // Filter and sort tasks client-side
  const filteredAndSortedTasks = React.useMemo(() => {
    if (!Array.isArray(data)) return [];

    let tasks = data as Task[];

    // Apply filters
    if (filters?.status) {
      tasks = tasks.filter(task => task.status === filters.status);
    }
    if (filters?.priority) {
      tasks = tasks.filter(task => task.priority === filters.priority);
    }

    // Apply sorting
    if (filters?.sortBy === "dueDate") {
      tasks = [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    }

    return tasks;
  }, [data, filters]);

  // Categorize tasks for dashboard
  const categorizedTasks = React.useMemo(() => {
    if (!Array.isArray(data) || !user) return { assigned: [], created: [], overdue: [] };

    const tasks = data as Task[];
    const now = new Date();

    return {
      assigned: tasks.filter(task => task.assignedToId === user._id),
      created: tasks.filter(task => task.creatorId === user._id),
      overdue: tasks.filter(task =>
        new Date(task.dueDate) < now && task.status !== "Completed"
      ),
    };
  }, [data, user]);

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
    tasks: filteredAndSortedTasks,
    categorizedTasks,
    isLoading,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
  };
};



