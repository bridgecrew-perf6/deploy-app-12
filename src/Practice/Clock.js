import React from "react";

const Clock=(props)=>{
    return(
        <div>
            <h1>time is: {props.date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;