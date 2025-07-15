import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { Task } from '@entities/task/model/Types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskContext } from '@features/taskContext/model/TaskContext';

interface TaskItemProps {
  task: Task;
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'High':
      return 'error';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'default';
  }
}

function TaskItem({ task }: TaskItemProps) {
  const { deleteTask } = useTaskContext();

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ wordBreak: 'break-word' }}>
          {task.title}
        </Typography>

        {task.description && (
          <Typography
            sx={{
              color: 'text.secondary',
              mt: 1,
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            {task.description}
          </Typography>
        )}
      </CardContent>

      <Box sx={{ px: 2, pb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            mb: 2,
          }}
        >
          <Chip color="secondary" label={task.category} size="small" />
          <Chip color="info" label={task.status} size="small" />
          <Chip
            color={getPriorityColor(task.priority)}
            label={task.priority}
            size="small"
          />
        </Box>

        <CardActions sx={{ p: 0 }}>
          <Link to={`/task/${task.id}`} style={{ textDecoration: 'none' }}>
            <Button size="small" variant="contained">
              Edit
            </Button>
          </Link>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default TaskItem;
