import { useState } from 'react'
import './TaskManager.css'
export default function TaskForm({addTask}){
    const[value,setValue]=useState("");
    const handleChange=(event)=>{
        setValue(event.target.value);
    }
    const handleSumbit=(event)=>{
        event.preventDefault();
        if(value.trim()){
            addTask(value);
            setValue("");
        }
    }
    return (
        <form action="" onSubmit={handleSumbit}>
            <div className='block'>
            <input type="text" className='text' onChange={handleChange} value={value} />
            <button type="submit" className="button">Add</button>
            </div>
        </form>
    )
    
}