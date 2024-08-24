import "./index.css"
import { GoHome } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { GrHelpBook } from "react-icons/gr";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuPanelLeftClose } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(<div className="sbr">
        <ul className="sbr-btn-container">
          <Link className="link" to="/home">  <li className="item" ><GoHome size={28}/></li></Link>
            <li className="item"><GoBook size={28}/></li>
            <li className="item"><GrHelpBook size={28}/></li>
            <li className="item"><FaRegNoteSticky size={28}/></li>
           <Link className="link" to="/createpost"><li className="item"><FaRegEdit size={28}/></li></Link> 
            <li className="item"> <MdOutlineGroup size={28}/></li>
           <li className="item"><MdOutlineQuiz size={28}/></li>
           <hr className="hr"/>            
            <li className="item"><MdOutlineManageAccounts size={28}/></li>

        </ul>
        <p className="item"><LuPanelLeftClose size={28}/></p>
        
    </div>)
}


export default Sidebar