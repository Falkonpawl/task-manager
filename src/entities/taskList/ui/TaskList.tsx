import { Box } from '@mui/material';
import TaskItem from '@entities/task/ui/TaskItem';
import { useTaskContext } from '@features/taskContext/model/TaskContext';

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
          }}
        >
          <TaskItem task={task} />
        </Box>
      ))}
    </Box>
  );
}

export default TaskList;
