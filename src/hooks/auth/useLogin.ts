import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/axios';
import type { LoginRequest, User } from '../../types/user';
import { useAuthStore } from '../../stores/authStore';
import { toast } from 'sonner';

interface LoginResponse {
  success: boolean;
  data?: {
    user: User;
    token: string;
  };
  message?: string;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await api.post<LoginResponse>('/auth/login', credentials);
      console.log('request URL:', api.defaults.baseURL);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.data) {
        setAuth(data.data.user, data.data.token);

        toast.success('Successfully Login');
        api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;

        queryClient.invalidateQueries({ queryKey: ['user'] });
        queryClient.invalidateQueries({ queryKey: ['todos'] });
      }
    },
  });
}
