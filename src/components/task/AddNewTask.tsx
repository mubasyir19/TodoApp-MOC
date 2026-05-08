import React, { useState } from 'react';
import { useAddTodo } from '../../hooks/task/useAddTodo';

interface AddNewTask {
  title: string;
  description: string;
  status: 'Low' | 'Medium' | 'High';
}

const statusOptions = ['High', 'Medium', 'Low'];

function AddNewTask() {
  const { mutate, isPending } = useAddTodo();

  const [formData, setFormData] = useState<AddNewTask>({
    title: '',
    description: '',
    status: 'Medium',
  });

  const handleChangeAddTask = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    mutate({
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status as 'Low' | 'Medium' | 'High',
      isCompleted: false,
    });

    setFormData({
      title: '',
      description: '',
      status: 'Medium',
    });
  };

  return (
    <form className='grid gap-4 md:grid-cols-3' onSubmit={handleAddTodo}>
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChangeAddTask}
        placeholder='Judul tugas'
        className='rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-secondary/20'
      />
      <input
        type='text'
        name='description'
        value={formData.description}
        onChange={handleChangeAddTask}
        placeholder='Deskripsi tugas (opsional)'
        className='rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-secondary/20'
      />
      <div className='grid gap-3 md:grid-cols-2'>
        <select
          name='status'
          value={formData.status}
          onChange={handleChangeAddTask}
          className='rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-secondary/20'
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type='submit'
          disabled={isPending}
          className='rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-70'
        >
          {isPending ? 'Menyimpan...' : 'Tambah Tugas'}
        </button>
      </div>
    </form>
  );
}

export default AddNewTask;
