import React from "react";
// import Clock from "./Clock";
//------------------------------functional based-----------------

const Clock=(props)=>{
    return(
        <div>
            <h1>time is: {props.date.toLocaleTimeString()}</h1>
        </div>
    )
}
const PropsComponent=()=>{
//    const [state,setState]=useState(0);
    return(
        <div>
            <Clock date={new Date()}/>
        </div>
    )
}
setInterval(PropsComponent,1000);
export default PropsComponent;


//------------------------------class based-----------------------
// class PropsComponent extends React.Component{
//     state={
//         name:"Rahul"
//     }
    
//     render(){
//         return(
//             <div>
//                 <img  src={this.props.avtar.avtarUrl} alt={this.props.avtar.name}/>
//                 {/* <h1>Name is {this.state.name}</h1> */}
//                 {/* <h1>Name is {this.props.name}</h1> */}
//             </div>
//         )
//     }
// }

// export default PropsComponent;