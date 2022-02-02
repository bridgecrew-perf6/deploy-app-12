import React from "react";
import Task from './Task';
let allTasks=[
    {
        taskNum:1,
        taskName:'task 1',
        taskDescription:'This is task 1'
    },
    {
        taskNum:2,
        taskName:'task 2',
        taskDescription:'This is task 2'
    },
    {
        taskNum:3,
        taskName:'task 3',
        taskDescription:'This is task 3'
    },
    {
        taskNum:4,
        taskName:'task 4',
        taskDescription:'This is task 4'
    }
    
];
const AllTasks=()=>{
     return(
         <div>
             <Task allTasks={}/>
         </div>
     
     )
     }
export default AllTasks;