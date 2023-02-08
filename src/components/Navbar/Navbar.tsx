import React from 'react';
import de from "./Navbar.module.css"

function Navbar() {
    return <nav className={de.navbar}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}
  export default Navbar