import { Nav, SettingsMenu, SettingsItem } from "./NavbarStyle";
import logo from "../../../public/logo.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Lógica para fazer logout (por exemplo, remover o token de autenticação)
        Cookies.remove("authToken");
        navigate("/login"); // Redirecione para a página de login após o logout
    }

    return (
        <>
            <Nav>
                <img src={logo} alt="Logo do site" />
                <SettingsMenu>
                    <SettingsItem>
                        <Link to="/editarperfil">Editar Perfil</Link>
                    </SettingsItem>
                    <SettingsItem>
                        <a href="#" onClick={handleLogout}>Sair</a>
                    </SettingsItem>
                </SettingsMenu>
            </Nav>
            <Outlet />
        </>
    )
}
