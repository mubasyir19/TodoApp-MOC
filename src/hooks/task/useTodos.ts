import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/axios';
import type { FetchTodosParams, Todo, TodoListResponse } from '../../types/todo';

export function useTodos(filters: FetchTodosParams = {}) {
  return useQuery<Todo[], Error>({
    queryKey: ['todos', filters.completed, filters.search],
    queryFn: async (): Promise<Todo[]> => {
      const response = await api.get<TodoListResponse>('/todo/all', {
        params: filters,
      });
      return response.data.data;
    },
    staleTime: 1000 * 30,
  });
}
