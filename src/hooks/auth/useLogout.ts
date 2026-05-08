import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../stores/authStore';
import { api } from '../../lib/axios';
import { authUtils } from '../../utils/auth';

export function useLogout() {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logout = useCallback(() => {
    clearAuth();

    authUtils.clearAuth();

    delete api.defaults.headers.common['Authorization'];

    navigate('/login', { replace: true });
  }, [clearAuth, navigate]);

  return { logout };
}
