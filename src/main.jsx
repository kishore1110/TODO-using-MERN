import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskManager from './TaskManager/TaskManger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskManager />
  </StrictMode>,
)
