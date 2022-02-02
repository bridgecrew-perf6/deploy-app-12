import React,{useState} from 'react';

export default function Login(){

  const [title,setTitle]=useState("")
  const [user,setUser]=useState({
    email:"",
    password:""
  });

function handleChange(e){
  const {name,value}=e.target;
  const[isClicked,setClick]=useState(false)
  setUser(prevValue=>{
    return {
      ...prevValue,[name]:value
    }
  })
}

function handleOnClick(){
  setTitle(user.email);
  setClick(true)
}

  return <div>
    <h1>Login</h1>
       <form onSubmit={ e=> e.preventDefault()} >
         <input name="email"
          onChange={handleChange} 
          value={user.email}  
          type={'email'} placeholder='enter email'
           />
         <input value={user.password} 
         onChange={handleChange} name='password'
          type={'password'} placeholder='enter password' 
          />
         <button onClick={handleOnClick} >Login</button>
       </form>
       <span>{isClicked?Welcome! title:null}</span>
       {/* <span>New User?</span> */}
  </div>;
};
