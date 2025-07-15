import type { Task } from '@entities/task/model/Types';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'User cannot login with correct credentials.',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Add dark mode',
    description: 'Implement dark mode toggle.',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Update README',
    description: 'Add installation instructions.',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: '4',
    title: 'Refactor dashboard code',
    category: 'Refactor',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: '5',
    title: 'Add unit tests for auth module',
    category: 'Test',
    status: 'In Progress',
    priority: 'High',
  },
];
