import { type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { useSocket } from "../hooks/useSocket";

interface Props {
  children: ReactNode;
}

const SocketInitializer = () => {
  useSocket(); // Initialize socket listeners
  return null;
};

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketInitializer />
      {children}
    </QueryClientProvider>
  );
}
