import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router";
const MainLayOut = () => {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
}

export default MainLayOut;