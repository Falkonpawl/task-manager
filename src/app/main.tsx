import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@app/App';
import { TaskProvider } from '@features/taskContext/model/TaskContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>,
);
