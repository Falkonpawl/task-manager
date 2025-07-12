import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import type { Task } from "../types/Task"
import { initialTasks } from "../constans/Tasks"

interface TaskContextProps {
  tasks: Task[]
  deleteTask: (id: string) => void
  updateTask: (updatedTask: Task) => void
  addTask: (newTask: Task) => void
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks")
    return stored ? JSON.parse(stored) : initialTasks
  })

  const syncTasks = (updated: Task[]) => {
    setTasks(updated)
    localStorage.setItem("tasks", JSON.stringify(updated))
  }

  const deleteTask = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id)
    syncTasks(updated)
  }

  const updateTask = (updatedTask: Task) => {
    const updated = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
    syncTasks(updated)
  }

  const addTask = (newTask: Task) => {
    const updated = [...tasks, newTask]
    syncTasks(updated)
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, updateTask, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context
}