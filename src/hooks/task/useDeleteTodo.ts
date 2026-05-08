import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { DeleteTodoResponse } from '../../types/todo';
import { api } from '../../lib/axios';

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation<DeleteTodoResponse, Error, string>({
    mutationFn: async (id) => {
      const response = await api.post<DeleteTodoResponse>('/todo/delete', { id });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
