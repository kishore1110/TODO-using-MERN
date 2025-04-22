export default function({tasks,toggleTask}){
    return(
         <ul>
            {tasks.map((task,index)=><li className={`${task.completed === true ? 'taskCompleted' : ''} tasks`}
            key={index}  
            onClick={()=>toggleTask(task.id)}
            >{task.text}</li>)}
        </ul>)
    
}