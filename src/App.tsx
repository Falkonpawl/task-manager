import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import TaskCreatePage from './pages/TaskCreatePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/task/:id" element={<TaskCreatePage/>} />
          <Route path="/task/new" element={<TaskCreatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
