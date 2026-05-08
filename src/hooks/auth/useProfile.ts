import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/axios';
import type { User } from '../../types/user';
import { authUtils } from '../../utils/auth';

interface ProfileResponse {
  success: boolean;
  data: User;
}

export function useProfile() {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: async () => {
      const response = await api.get<ProfileResponse>('/auth/profile');
      return response.data.data;
    },
    enabled: !!authUtils.getToken(),
    staleTime: 1000 * 60 * 5,
  });
}
