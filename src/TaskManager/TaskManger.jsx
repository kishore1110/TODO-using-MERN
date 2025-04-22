import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
export default function TaskManager(){
    const [tasks,settasks]=useState([]);
    const addTask=(text)=>{
        const newTask={id:Date.now(),text:text,completed:false}
        settasks([...tasks,newTask])
    }
    const toggleTask=(id)=>{
        settasks(tasks.map((task)=>{
            return task.id==id? {...task,completed:!task.completed}:task
        }))
    }
    return (<>
        <h1>Task Manager</h1>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} toggleTask={toggleTask}/>
        <p>Tasks: {tasks.length}</p>
    </>)
}