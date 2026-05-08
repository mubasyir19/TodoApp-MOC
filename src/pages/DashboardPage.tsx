import { useMemo } from 'react';
import AddNewTask from '../components/task/AddNewTask';
import TaskItem from '../components/task/TaskItem';
import { useTodos } from '../hooks/task/useTodos';
import type { TaskFilterMode } from '../stores/taskFilterStore';
import { useTaskFilterStore } from '../stores/taskFilterStore';
import type { Todo } from '../types/todo';

function DashboardPage() {
  const filterMode = useTaskFilterStore((state) => state.filterMode);
  const searchKeyword = useTaskFilterStore((state) => state.searchKeyword);
  const setFilterMode = useTaskFilterStore((state) => state.setFilterMode);
  const setSearchKeyword = useTaskFilterStore((state) => state.setSearchKeyword);

  const completedParam = useMemo(() => {
    if (filterMode === 'Completed') return true;
    if (filterMode === 'Pending') return false;
    return undefined;
  }, [filterMode]);

  const todosQuery = useTodos({ completed: completedParam, search: searchKeyword });
  const todos = (todosQuery.data ?? []) as Todo[];

  return (
    <div className='mt-4 space-y-6'>
      <div className='flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div>
          <h1 className='text-2xl font-semibold'>Todo Dashboard</h1>
          <p className='mt-1 text-sm text-slate-600'>Kelola tugas Anda dengan filter, pencarian, dan aksi CRUD.</p>
        </div>

        <AddNewTask />
      </div>

      <div className='grid gap-4 lg:grid-cols-[1fr_auto]'>
        <div className='flex flex-wrap gap-2'>
          {(['All', 'Completed', 'Pending'] as TaskFilterMode[]).map((mode) => (
            <button
              key={mode}
              type='button'
              onClick={() => setFilterMode(mode)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === filterMode
                  ? 'bg-secondary text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              {mode === 'All' ? 'Semua' : mode === 'Completed' ? 'Selesai' : 'Belum Selesai'}
            </button>
          ))}
        </div>

        <div className='max-w-md'>
          <input
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
            placeholder='Cari tugas...'
            className='w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-secondary/20'
          />
        </div>
      </div>

      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        {todosQuery.isLoading ? (
          <p className='text-sm text-slate-500'>Memuat tugas...</p>
        ) : todosQuery.isError ? (
          <p className='text-sm text-red-600'>Gagal memuat tugas.</p>
        ) : todos.length ? (
          <div className='space-y-4'>
            {todos.map((todo) => (
              <TaskItem key={todo.id} item={todo} />
            ))}
          </div>
        ) : (
          <div className='rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-600'>
            Tidak ada tugas untuk ditampilkan.
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
