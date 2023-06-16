import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center my-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;