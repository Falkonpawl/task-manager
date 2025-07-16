import { Box } from '@mui/material';
import TaskItem from '@entities/task/ui/TaskItem';
import { useTaskContext } from '@features/taskContext/model/TaskContext';

/**
 * Компонент-обёртка, отображающий список задач в виде адаптивной сетки.
 * Задачи берутся из глобального контекста `useTaskContext`.
 *
 * Карточки задач (`TaskItem`) располагаются в виде CSS-сетки с автоадаптацией
 * под ширину экрана. Каждая карточка ограничена по ширине и растягивается по высоте.
 */
function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 2,
        alignItems: 'stretch',
      }}
    >
      {tasks.map((task) => (
        <Box
          key={task.id}
          sx={{
            display: 'flex',
            maxWidth: 600,
            width: '100%',
            mx: 'auto',
          }}
        >
          <TaskItem task={task} />
        </Box>
      ))}
    </Box>
  );
}

export default TaskList;
