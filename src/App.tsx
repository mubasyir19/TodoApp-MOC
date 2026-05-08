import { useEffect } from 'react';
import { useAuthStore } from './stores/authStore';
import { AppRouter } from './routes/index';
import { todoUtils } from './utils/todo';
import { defaultTodos } from './data/task_default';

function App() {
  useEffect(() => {
    useAuthStore.getState().rehydrate();

    const existingTodos = localStorage.getItem('todo-storage');
    if (!existingTodos) {
      todoUtils.writeTodos(defaultTodos);
    }
  }, []);

  return <AppRouter />;
}

export default App;
