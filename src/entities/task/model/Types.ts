/**
 * Возможные категории задач.
 */
export type TaskCategory =
  | 'Bug'
  | 'Feature'
  | 'Documentation'
  | 'Refactor'
  | 'Test';

/**
 * Возможные статусы задач.
 */
export type TaskStatus = 'To Do' | 'In Progress' | 'Done';

/**
 * Уровни приоритета задачи.
 */
export type TaskPriority = 'Low' | 'Medium' | 'High';

/**
 * Модель задачи в приложении.
 */
export interface Task {
  /** Уникальный идентификатор */
  id: string;
  /** Заголовок задачи */
  title: string;
  /** Описание задачи (опционально) */
  description?: string;
  /** Категория задачи */
  category: TaskCategory;
  /** Статус выполнения */
  status: TaskStatus;
  /** Приоритет выполнения */
  priority: TaskPriority;
  /** Дата и время создания задачи */
  createdAt: string;
}
