import { create } from 'zustand';

export type TaskFilterMode = 'All' | 'Completed' | 'Pending';

interface TaskFilterState {
  filterMode: TaskFilterMode;
  searchKeyword: string;
  setFilterMode: (filterMode: TaskFilterMode) => void;
  setSearchKeyword: (keyword: string) => void;
  resetFilters: () => void;
}

export const useTaskFilterStore = create<TaskFilterState>((set) => ({
  filterMode: 'All',
  searchKeyword: '',
  setFilterMode: (filterMode) => set({ filterMode }),
  setSearchKeyword: (searchKeyword) => set({ searchKeyword }),
  resetFilters: () => set({ filterMode: 'All', searchKeyword: '' }),
}));
