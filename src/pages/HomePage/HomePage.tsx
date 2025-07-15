import TaskList from '@entities/taskList/ui/TaskList';
import { Typography } from '@mui/material';
import { Box, Grid } from '@mui/material';
import { Link } from '@mui/material';
function HomePage() {
  return (
    <>
      <Grid container justifyContent="center">
        <Box
          component="section"
          sx={{
            p: 2,
            border: '1px solid black',
            borderRadius: 1,
            textAlign: 'center',
            mb: 5,
          }}
        >
          <Typography variant="h3">Task Manager</Typography>
          <Link href="/task/new" color="primary" underline="hover" variant="h6">
            Click to create task
          </Link>
        </Box>
      </Grid>

      <TaskList />
    </>
  );
}
export default HomePage;
