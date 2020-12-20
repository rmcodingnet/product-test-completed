import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-section">
                <Link to="/">LIST PRODUCTS</Link>
            </div>
            <div className="navbar-section">
                <Link to="/create">ADD NEW PRODUCT</Link>
            </div>
        </div>
    )
}
