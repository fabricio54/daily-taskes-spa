import { Nav } from "./NavbarStyle";
import logo from "../../../public/logo.jpg";
import { Outlet } from "react-router-dom";

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