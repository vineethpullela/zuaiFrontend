import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreatePost from "./components/CreatePost"
import Headers from "./components/Headers"
import LoginRegister from "./components/LoginRegister"

import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import { useState } from "react"


import { store } from "./store"
///mport BlogDetail from "./components/BlogDetail"

const App=()=>{

  const [token,setToken]=useState(null);

  
 
  return(
    
    <div className="app"> 
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>    
      <Headers/> 
      <Sidebar/> 
    <Routes>
    <Route exact path="/" Component={LoginRegister}/>
      <Route exact path="/home" Component={Home}/>
      <Route exact path="/createpost" Component={CreatePost}/>
     
    </Routes>
     
      
     
   
    
   
   
    </BrowserRouter>
    </store.Provider>
    </div>
  )
}



export default App