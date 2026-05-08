import MockAdapter from 'axios-mock-adapter';
import { api } from '../lib/axios';
import type { Todo } from '../types/todo';
import { todoUtils } from '../utils/todo';

const mock = new MockAdapter(api);

// Latency Simulation
const randomDelay = () => 800 + Math.floor(Math.random() * 200);

const parseConfigData = (config: { data?: unknown }) => {
  if (!config?.data) return {};
  return typeof config.data === 'string' ? JSON.parse(config.data) : config.data;
};

// Login
mock.onPost('/auth/login').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const { username, password } = JSON.parse(config.data);

  if (username === 'adminTodo' && password === 'admin123') {
    return [
      200,
      {
        success: true,
        data: {
          user: {
            id: '1',
            fullname: 'Admin Todo',
            username: 'adminTodo',
            password: 'admin123',
          },
          token: 'T0K3N-T0D0',
        },
      },
    ];
  }

  return [
    401,
    {
      success: false,
      message: 'Invalid username or password',
    },
  ];
});

// Get Profile
mock.onGet('/auth/profile').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const token = config.headers?.['Authorization'];
  if (token && token.includes('T0K3N-T0D0')) {
    return [
      200,
      {
        success: true,
        data: {
          id: '1',
          fullname: 'Admin Todo',
          username: 'adminTodo',
          password: 'admin123',
        },
      },
    ];
  }

  return [
    401,
    {
      success: false,
      message: 'Unauthorized',
    },
  ];
});

// Get Todos with filter
mock.onGet('/todo/all').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const todos = todoUtils.readTodos();
  const { search, completed } = config?.params ?? {};
  const normalizedSearch = typeof search === 'string' ? search.trim().toLowerCase() : '';

  const filtered = todos.filter((todo) => {
    const matchesSearch =
      !normalizedSearch ||
      todo.title.toLowerCase().includes(normalizedSearch) ||
      (todo.description?.toLowerCase().includes(normalizedSearch) ?? false);

    const matchesCompleted =
      completed === undefined ||
      completed === null ||
      todo.isCompleted === (completed === 'true' || completed === true);

    return matchesSearch && matchesCompleted;
  });

  return [200, { success: true, data: filtered }];
});

// Add Todo
mock.onPost('/todo/add').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const body = parseConfigData(config);
  const todos = todoUtils.readTodos();
  const newTodo: Todo = {
    id:
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}`,
    title: body.title || 'Untitled task',
    description: body.description || '',
    status: body.status || 'Low',
    isCompleted: false,
  };

  const nextTodos = [newTodo, ...todos];
  todoUtils.writeTodos(nextTodos);

  return [200, { success: true, data: newTodo }];
});

// Update Todo
mock.onPost('/todo/update').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const body = parseConfigData(config);
  const todos = todoUtils.readTodos();
  const updatedTodos = todos.map((todo) => (todo.id === body.id ? { ...todo, ...body.updates } : todo));

  todoUtils.writeTodos(updatedTodos);

  const updatedTodo = updatedTodos.find((todo) => todo.id === body.id);
  return [200, { success: true, data: updatedTodo }];
});

// Delete Todo
mock.onPost('/todo/delete').reply(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, randomDelay()));

  const body = parseConfigData(config);
  const todos = todoUtils.readTodos();
  const remaining = todos.filter((todo) => todo.id !== body.id);
  todoUtils.writeTodos(remaining);

  return [200, { success: true, message: 'Todo deleted' }];
});
