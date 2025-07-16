import type { Task } from '@entities/task/model/Types';

/**
 * Начальный список задач, загружаемый при первом запуске,
 * если в localStorage нет сохранённых данных.
 */
export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'User cannot login with correct credentials.',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
    createdAt: '09:12 10.07.2025',
  },
  {
    id: '2',
    title: 'Add dark mode',
    description: 'Implement dark mode toggle.',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
    createdAt: '14:45 11.07.2025',
  },
  {
    id: '3',
    title: 'Update README',
    description: 'Add installation instructions.',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
    createdAt: '08:22 12.07.2025',
  },
  {
    id: '4',
    title: 'Refactor dashboard code',
    category: 'Refactor',
    status: 'To Do',
    priority: 'Medium',
    createdAt: '17:10 13.07.2025',
  },
  {
    id: '5',
    title: 'Add unit tests for auth module',
    category: 'Test',
    status: 'In Progress',
    priority: 'High',
    createdAt: '11:30 14.07.2025',
  },
];
