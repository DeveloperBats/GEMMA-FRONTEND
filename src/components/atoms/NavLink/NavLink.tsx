import React from "react"
import { Link, LinkProps } from "react-router-dom"
import "./index.scss"

interface INavLinkProps extends LinkProps {
    variant: "primary"
}

const NavLink = (props: INavLinkProps) => {
    return <Link className={`navLink ${props.variant}`} {...props} />
}

export default NavLink
