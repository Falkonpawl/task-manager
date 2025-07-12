import { Typography } from "@mui/material"
import { Box, Grid } from "@mui/material"
import TaskDetails from "../components/TaskDetails"
function TaskCreatePage() {
  return (
    <>
      <Grid container justifyContent="center">
        <Box
          component="section"
          sx={{
            p: 2,
            border: "1px solid black",
            borderRadius: 1,
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography variant="h3">Task editor</Typography>
        </Box>
      </Grid>

      <TaskDetails />
    </>
  )
}
export default TaskCreatePage
