import { Link } from "react-router-dom"
import { NEW_ANSWER_ROUTE } from "../../routes/const"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NewAnswerButton=({topicId})=>{

    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn){
        return
    }
    
    return(
        <div className="newAnswerButton"><Link to={{pathname:NEW_ANSWER_ROUTE,search:`?topicId=${topicId}`}}>Create New Answer</Link></div>
    )
}

export default NewAnswerButton