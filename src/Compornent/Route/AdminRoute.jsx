import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center my-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;