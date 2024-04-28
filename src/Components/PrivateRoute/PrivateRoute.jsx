import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <div className="text-center text-6xl mt-10">Loading...</div>
    }

    if (!user){
        return <Navigate to="/login" state={location?.pathname || "/"} />
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;