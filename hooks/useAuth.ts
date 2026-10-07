import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/lib/api";

export function useAuth() {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await api.getProfile();
        return response.data;
      } catch {
        return null;
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      api.login(credentials.email, credentials.password),
    onSuccess: (response) => {
      localStorage.setItem("auth_token", response.data.token);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => api.logout(),
    onSuccess: () => {
      localStorage.removeItem("auth_token");
    },
  });

  return {
    user,
    isLoading,
    isError,
    error,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isAuthenticated: !!user,
  };
}
