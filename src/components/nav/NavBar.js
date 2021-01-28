import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Kandy Korner</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/orders">My Order</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" onClick={logout} to="/login">Logout</Link>
            </li>
        </ul>
    )
}

const logout = () => {
    localStorage.clear()
}