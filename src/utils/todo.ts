import { defaultTodos } from '../data/task_default';
import type { Todo } from '../types/todo';

const storageKey = 'todo-storage';
export const todoUtils = {
  writeTodos: (todos: Todo[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(storageKey, JSON.stringify(todos));
  },
  readTodos: (): Todo[] => {
    if (typeof window === 'undefined') return defaultTodos;
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : defaultTodos;
    } catch {
      return defaultTodos;
    }
  },
};
