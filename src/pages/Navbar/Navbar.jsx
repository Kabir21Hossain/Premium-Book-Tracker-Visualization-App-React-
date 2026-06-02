import { NavLink } from "react-router";
const Navbar = () => {

    const links = <>


        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500' : 'text-black'}>Home</NavLink></li>
        <li><NavLink to="/books" className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500' : 'text-black'}>Listed Books</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-green-500 font-bold border border-green-500' : 'text-black'}>Dashboard</NavLink></li>


    </>


    return (
        <div className="bg-white bg-white shadow-md rounded-lg my-2">
            <div className="max-w-6xl mx-auto ">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <h2 className="text-lg md:text-2xl font-bold">Book Vibe</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2">
                        <a className="btn btn-sm md:btn-md  btn-success text-white">Login</a>
                        <a className="btn btn-sm md:btn-md btn-accent text-white">Sign Up</a>
                    </div>
                </div>
            </div>
        </div >


    )
}
export default Navbar;