import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Todo, TodoItemResponse } from '../../types/todo';
import { api } from '../../lib/axios';

export function useAddTodo() {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Omit<Todo, 'id'>>({
    mutationFn: async (todo) => {
      try {
        const response = await api.post<TodoItemResponse>('/todo/add', todo);
        return response.data.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
