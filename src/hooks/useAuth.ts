import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMeApi, loginApi, registerApi, logoutApi } from "../api/auth.api";
import { updateProfileApi } from "../api/user.api";
import type { LoginPayload, RegisterPayload } from "../api/auth.api";
import type { User } from "../types/user.types";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMeApi,
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginPayload) => loginApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) => registerApi(data),
  });

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: (data: Partial<User>) => updateProfileApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return {
    user: data,
    isLoading,
    isAuthenticated: !isError,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    updateProfile: updateProfileMutation.mutateAsync,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
    isUpdateProfileLoading: updateProfileMutation.isPending,
  };
};
