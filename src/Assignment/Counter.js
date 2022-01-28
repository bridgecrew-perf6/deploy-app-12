import React,{useState}  from 'react';

import '../Test.css'

//-----------------------------------------Using Fuctional based Component-----------------
const Counter=()=>{
    const [count,setCount]=useState(0);

    return(
        <div className='myDiv'>
            <h1 >Counter</h1>
            <button className="btn btn-outline-secondary"   onClick={()=>setCount(count===0?0:count-1)}> - </button>
            <input className='inputCount' type="text" value={count}/>
            <button className="btn btn-outline-secondary"   onClick={()=>setCount(count+1)}> + </button>
        </div>
    );
}
export default Counter;
//------------------------------------------Using Class Based Component---------------------
// class Counter extends React.Component{

//         state={
//             count:0
//         }
    
//     updateCountP(){
//         this.setState({
//             count:this.state.count+1
//         })
        
//     }
//     updateCountN(){
//         this.setState({
//             count:this.state.count-1
//         })
        
//     }
//     render(){
//         return(
//             <div className='myDiv'>
//                 <h1 className='heading' >Counter</h1>
//                 <button type="button" class="btn btn-outline-secondary" value={this.state.count} onClick={()=>{this.updateCountN()}} >-</button>
//                 <input className='inputCount' type="text" value={this.state.count} />
//                 <button type="button" class="btn btn-outline-secondary"  value={this.state.count} onClick={()=>{this.updateCountP()}} >+</button>
//             </div>
//         )
//     }
// }
//export default Counter;