import { useNavigate } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { store } from "../../store";



const Headers=()=>{
    const naviagte=useNavigate();
    const [token,setToken]=useContext(store);

const login=()=>{
if (!token){
    naviagte("/")
}
}

const logout=()=>{
    setToken(null)
    naviagte("/")
}



    return(<div className="header">
        <h1 className="header-heading">
            ZuAi
        </h1>

        <div className="header-button">
          <button type="button" className="login-btn" onClick={login}>Login</button>
            <button type="button" className="join-btn" onClick={logout}>LogOut</button>

        </div>
      
    </div>)
}



export default Headers