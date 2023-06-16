import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default main;