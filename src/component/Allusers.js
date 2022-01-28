// import React from "react";
// //import UserDetail from "./Userdetail";

// //--------------class based----------------
// // class based component is powerfull than functional 
// //state inside comonent,if the value of the state is changed value of state is changed then entire component rerender and also its descendant changed

// class AllUsers extends React.Component{
// state={
//   name:"Rahul",
// };
//   allusers=[
//             { name: "John", email: "john@email.com", phoneNumber: "+91-9876543210" },
//         {
//           name: "Shreyus",
//           email: "shreyus@email.com",
//           phoneNumber: "+91-7418529630",
//         },
//         {
//           name: "Nilanjan",
//           email: "nilanjan@email.com",
//           phoneNumber: "+91-9638527410",
//         },
//         ]

       

//         render(){
//           // setTimeout(() => {
//           //   this.setState({name:"Roshan"});   //always use setState() for changinf state
//           // }, (3500));
//           return(
//                 <div>
//                   <h1>The Name is {this.state.name}</h1>
//                      {<UserDetail key={0} user={this.allusers[0]}/>}
//                      { <UserDetail key={1}  user={this.allusers[1]}/>}
//                     {<UserDetail key={2}  user={this.allusers[2]}/>}
//                 </div>
                
//             );
//         }
// }
 



// //--------------------function based-----------------
//  //hooks(state var,setter())
//  //state in function based component is hooks
//  //import useState-> impoer React.{useState}
// //  const AllUsers=()=>{
// //    //let xyz=useState(initial_value);//xyz is an array    xyz[0]-> state and xyz[1]->setter()
// //     const [state,setState]=useState({name:"Sagar"});

// //     return{
// //       <h1>The name is: {state.name}</h1>;
// //     }
// //   };
// // function AllUsers(){
// //     let allusers=[
// //         { name: "John", email: "john@email.com", phoneNumber: "+91-9876543210" },
// //     {
// //       name: "Shreyus",
// //       email: "shreyus@email.com",
// //       phoneNumber: "+91-7418529630",
// //     },
// //     {
// //       name: "Nilanjan",
// //       email: "nilanjan@email.com",
// //       phoneNumber: "+91-9638527410",
// //     },
// //     ];
// //     return(
// //       <div>
// //            {allusers.map((user,index)=>(
// //                                 //Props properties
// //                <UserDetail key={index} user={user}/>//this is parent and passing value using props to child (userDetail function)
// //            ))}
// //       </div>
      
// //   );
// // }

// //     // let arr=[
// //     //     <UserDetail user={allusers[0]}/>,
// //     //     <UserDetail user={allusers[1]}/>,
// //     //     <UserDetail user={allusers[2]}/>,
        
// //     // ]

// //     // let array = [
// //   //   <UserDetails key={0} user={allUsers[0]} />,
// //   //   <UserDetails key={1} user={allUsers[1]} />,
// //   //   <UserDetails key={2} user={allUsers[2]} />,
// //   // ];
// // //   return(
// // //     <div>
// // //          {<UserDetail key={0} user={allusers[0]}/>}
// // //          { <UserDetail key={1}  user={allusers[1]}/>}
// // //         {<UserDetail key={2}  user={allusers[2]}/>}
// // //     </div>
    
// // // );
 

 

// export default AllUsers;