import { Navigate, useLocation } from "react-router";
import useInstructor from "../Hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center my-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;