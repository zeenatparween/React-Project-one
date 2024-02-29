import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className="logo">
                    <img src="https://w7.pngwing.com/pngs/992/52/png-transparent-nike-swoosh-logo-desktop-just-do-it-nike-angle-text-monochrome-thumbnail.png" alt="" />
                </div>
                <ul>
                    <li href="#" >Menu</li>
                    <li href="#" >Location</li>
                    <li href="#" >About</li>
                    <li href="#" >Contact</li>
                </ul>
                <button>Login</button>
            </nav>

        </div>
    )
}

export default Navbar
