import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/user';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  rehydrate: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user: User, token: string) => {
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },

      clearAuth: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      rehydrate: () => {
        const storedToken = localStorage.getItem('auth-storage');
        if (storedToken) {
          try {
            const parsedState = JSON.parse(storedToken);
            if (parsedState.state?.token) {
              set({
                user: parsedState.state.user,
                token: parsedState.state.token,
                isAuthenticated: !!parsedState.state.token,
              });
            }
          } catch (error) {
            console.error('Failed to rehydrate auth store:', error);
          }
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
