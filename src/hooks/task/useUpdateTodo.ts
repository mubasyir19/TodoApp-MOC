import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Todo, TodoItemResponse } from '../../types/todo';
import { api } from '../../lib/axios';

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, { id: string; updates: Partial<Omit<Todo, 'id'>> }>({
    mutationFn: async (payload) => {
      const response = await api.post<TodoItemResponse>('/todo/update', payload);
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
