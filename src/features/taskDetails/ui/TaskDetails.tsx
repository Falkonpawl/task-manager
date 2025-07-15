import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useTaskContext } from '@features/taskContext/model/TaskContext';
import type { Task } from '@entities/task/model/Types';

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, addTask } = useTaskContext();

  const task = tasks.find((t: Task) => t.id === id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setCategory(task.category);
      setStatus(task.status);
      setPriority(task.priority);
    }
  }, [task]);

  const handleSave = () => {
    if (!title || !category || !status || !priority) return;

    const newOrUpdatedTask: Task = {
      id: task?.id || uuidv4(),
      title,
      description,
      category: category as Task['category'],
      status: status as Task['status'],
      priority: priority as Task['priority'],
    };

    if (task) {
      updateTask(newOrUpdatedTask);
    } else {
      addTask(newOrUpdatedTask);
    }

    navigate('/');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 600,
        mx: 'auto',
        p: 2,
      }}
    >
      <TextField
        label="Title"
        required
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        multiline
        fullWidth
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Bug">Bug</MenuItem>
          <MenuItem value="Feature">Feature</MenuItem>
          <MenuItem value="Documentation">Documentation</MenuItem>
          <MenuItem value="Refactor">Refactor</MenuItem>
          <MenuItem value="Test">Test</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        >
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default TaskDetails;
