import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Task } from '@entities/task/model/Types';
import { initialTasks } from '@entities/task/model/Tasks';

/**
 * Типизация доступных методов и состояния контекста задач.
 */
interface TaskContextProps {
  /** Массив всех задач */
  tasks: Task[];
  /** Удалить задачу по ID */
  deleteTask: (id: string) => void;
  /** Обновить существующую задачу */
  updateTask: (updatedTask: Task) => void;
  /** Добавить новую задачу */
  addTask: (newTask: Task) => void;
}

/**
 * React-контекст для управления задачами.
 * Хранит список задач и предоставляет методы для изменения.
 */
const TaskContext = createContext<TaskContextProps | undefined>(undefined);

/**
 * Провайдер задач. Оборачивает приложение и предоставляет доступ
 * к состоянию задач через контекст.
 */
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : initialTasks;
  });

  const syncTasks = (updated: Task[]) => {
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const deleteTask = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id);
    syncTasks(updated);
  };

  const updateTask = (updatedTask: Task) => {
    const updated = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );
    syncTasks(updated);
  };

  const addTask = (newTask: Task) => {
    const updated = [...tasks, newTask];
    syncTasks(updated);
  };

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, updateTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

/**
 * Хук для доступа к контексту задач.
 * Выбрасывает ошибку, если используется вне `TaskProvider`.
 */
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
