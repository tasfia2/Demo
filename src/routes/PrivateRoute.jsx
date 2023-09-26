import { useContext } from "react";
import {AuthContext} from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
 const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 m-10"></progress>
    }

    if (user) {
        return children;
    }

return <Navigate to = "/login" state={{from:location}} replace ></Navigate>;

}


export default PrivateRoute;