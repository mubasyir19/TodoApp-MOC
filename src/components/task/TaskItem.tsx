import { useDeleteTodo } from '../../hooks/task/useDeleteTodo';
import { useUpdateTodo } from '../../hooks/task/useUpdateTodo';
import type { Todo } from '../../types/todo';
import CompletedBadge from './CompletedBadge';
import PriorityBadge from './PriorityBadge';

function TaskItem({ item }: { item: Todo }) {
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const handleToggleCompleted = (id: string, currentValue: boolean) => {
    updateTodoMutation.mutate({ id, updates: { isCompleted: !currentValue } });
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between'>
      <div className='space-y-2'>
        <div className='flex items-center gap-3'>
          <input
            type='checkbox'
            checked={item.isCompleted}
            onChange={() => handleToggleCompleted(item.id, item.isCompleted)}
            className='h-4 w-4 cursor-pointer rounded border-slate-300 text-secondary focus:ring-secondary'
          />
          <h3
            className={`text-lg font-semibold ${item.isCompleted ? 'line-through text-slate-400' : 'text-slate-900'}`}
          >
            {item.title}
          </h3>
        </div>
        {item.description ? <p className='text-sm text-slate-600'>{item.description}</p> : null}
        <div className='flex flex-wrap items-center gap-2 text-xs text-slate-500'>
          <PriorityBadge priority={item.status} />
          <CompletedBadge isCompleted={item.isCompleted} />
        </div>
      </div>
      <div className='flex gap-2'>
        <button
          type='button'
          onClick={() => handleDeleteTodo(item.id)}
          disabled={deleteTodoMutation.status === 'pending'}
          className='rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70'
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
