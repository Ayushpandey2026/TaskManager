import { useEffect } from "react";
import { socket } from "../utils/socket";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useSocket = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      socket.emit('join', user._id);
    }

    socket.on("task-created", () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    });

    socket.on("task-updated", () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    });

    socket.on(
      "task-assigned",

      (data: { taskId: string; taskTitle: string; assignedBy: string }) => {
        // refresh notifications list instead of calling addNotification
        queryClient.invalidateQueries({ queryKey: ["notifications"] });
      }
    );

    return () => {
      if (user) {
        socket.emit('leave', user._id);
      }
      socket.off("task-created");
      socket.off("task-updated");
      socket.off("task-assigned");
    };
  }, [queryClient, user]);
};
