import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        <nav className="nav--container">
            <FontAwesomeIcon icon="fa-solid fa-earth-americas" className="nav--logo" style={{color: "#ffffff",}} />
            <div className="nav--title">Ouz's travel log</div>
        </nav>
    )
}