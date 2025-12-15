import { useQuery } from "@tanstack/react-query";
import { getMeApi } from "../api/auth.api";

export const useAuth = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMeApi,
  });

  return {
    user: data,
    isLoading,
    isAuthenticated: !isError,
  };
};
