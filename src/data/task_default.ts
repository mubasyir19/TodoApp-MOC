import type { Todo } from '../types/todo';

export const defaultTodos: Todo[] = [
  {
    id: '1',
    title: 'Buat rencana tugas',
    description: 'Rencanakan item prioritas untuk hari ini',
    isCompleted: false,
    status: 'High',
  },
  {
    id: '2',
    title: 'Review kode',
    description: 'Cek PR dan perbarui dokumentasi',
    isCompleted: true,
    status: 'Medium',
  },
  {
    id: '3',
    title: 'Rapat tim',
    description: 'Diskusikan visi sprint dan milestone',
    isCompleted: false,
    status: 'Low',
  },
];
