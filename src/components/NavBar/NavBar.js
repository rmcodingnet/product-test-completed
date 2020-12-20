import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">List</Link>
                </li>
                <li>
                    <Link to="/create">Add</Link>
                </li>
            </ul>

        </div>
    )
}
