export interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  status: 'High' | 'Medium' | 'Low';
}

export interface FetchTodosParams {
  completed?: boolean;
  search?: string;
}

export interface TodoListResponse {
  success: boolean;
  data: Todo[];
  message?: string;
}

export interface TodoItemResponse {
  success: boolean;
  data: Todo;
  message?: string;
}

export interface DeleteTodoResponse {
  success: boolean;
  message?: string;
}
