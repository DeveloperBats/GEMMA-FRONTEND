import React from "react"
import { Diamond } from "@mui/icons-material"
import "./index.scss"
import NavLink from "components/atoms/NavLink/NavLink"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Diamond className="logo__image">
                    <div className="logo__animation" />
                </Diamond>
                <h1 className="logo__title">GEMMA</h1>
            </div>
            <div className="header__separator" />
            <nav className="header__nav">
                :
                <>
                    <li>
                        <NavLink to={"/login"} variant="primary">
                            Iniciar sesion
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/register"} variant="primary">
                            Registrarse
                        </NavLink>
                    </li>
                </>
            </nav>
        </header>
    )
}

export default Header
