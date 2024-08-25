import { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { store } from "../../store";
import "./index.css";

const LoginRegister =()=>{
    const navigate=useNavigate();
    const [token,setToken]=useContext(store)
    const [currState,setCurrState]=useState("login");
    const [userData,setData]=useState({username:"",email:"",password:""});
    //const [token,setToken]=useState("");
    
    const handelUserData=(e)=>{        
        setData({
            ...userData,[e.target.name]:e.target.value,
        })
    }


    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(currState==="Sign up"){
            axios.post("http://localhost:4000/register",userData).then(
                res=>alert(res.data)
            )
        }else{
            const {email,password}=userData
            const data={email,password}
            axios.post("http://localhost:4000/login",data).then(
                res=>setToken(res.data.token) 
               
            )
        }


    }

   if(token){
      navigate("/home");
     }
     

console.log(token)
    return(
        <div className="login">           
            <form className="login-form" onSubmit={onSubmitForm}>
                <h1 className="login-title">{currState}</h1>
               {currState==="Sign up"?<input type="text" name="username" placeholder="username" className="form-input" require onChange={handelUserData}/>:null} 
                <input type="email" name="email" placeholder="emial address" className="form-input"  onChange={handelUserData}/>
                <input type="password" name="password" placeholder="pasword" className="form-input" onChange={handelUserData} />
                <button type="submit"  className="login-button">{currState==="Sign up"?"Create account":"Login now"}</button>
                <div  className="login-term">
                    <input type="checkbox"/>
                    <p>Agree to the term of use & privacy policy</p>
                </div>
                <div className="login-forgot">
                    {currState==="Sign up"? <p className="login-toggle">Already have an account <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>:
                    <p className="login-toggle">Create an account <span onClick={()=>{setCurrState("Sign up")}}>Click here</span></p>}
                   
                    
                </div>
            </form>
        </div>
    )

}



export default LoginRegister