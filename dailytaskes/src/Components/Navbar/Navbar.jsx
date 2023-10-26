import { Nav } from "./NavbarStyle";
import logo from "../../../public/logo.jpg";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export function Navbar() {
    
    return (
        <>
            <Nav>
                <img src={logo} alt="Logo do site" />
            </Nav>
            <Outlet />
        </>
    )
}