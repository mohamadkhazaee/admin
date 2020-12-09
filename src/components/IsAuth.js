import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const IsAuth = (props) =>{
    useEffect(()=>{
       return true ? '' : window.location.href ='/auth/login'
    },[])
    return(
        props.children
    )
}
export default withRouter(IsAuth)