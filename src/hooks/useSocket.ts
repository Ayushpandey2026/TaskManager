import { useEffect } from "react";
import { socket } from "../utils/socket";
import { useQueryClient } from "@tanstack/react-query";

export const useSocket = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on("task:updated", () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    });

    socket.on("task:assigned", () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    });

    return () => {
      socket.off("task:updated");
      socket.off("task:assigned");
    };
  }, [queryClient]);
};
