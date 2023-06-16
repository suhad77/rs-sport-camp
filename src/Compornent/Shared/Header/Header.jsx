import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li>
            {
                user && <Link to='/dashboard'>Dashboard</Link>
            }
        </li>
    </>


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={`${user?.photoURL}`} />
                            </div>
                        </div>
                    </div>
                    {user ? <Link className="btn " onClick={handleLogOut}>Log Out</Link> : <li><Link to='/login'>Login</Link></li>}
                </div>
            </div>
        </div >
    );
};

export default Header;