import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
function Navbar() {
    {/* create a responsive navagation bar using the bar icon... 
    next create the State and  onclick function */}
    const [openLinks, setOpenLinks]= useState(false);
    {/* create the fuction*/}
    const showlinks =()=>{
        setOpenLinks(!openLinks);

    }
    return (
        <div className="navcontainer">
            <nav>
            <div className="linknav" id={openLinks ? "open" : "close"}>
                <Link className="lin" to="/">Home</Link>
                <Link className="lin"  to="/About">About</Link>
                <Link className="lin"  to="/Projects">Projects</Link>
                <Link  className="lin" to="/Contacts">Contacts</Link>
            </div>
                <button className="btnlin" onMouseOver={showlinks}>
                <FaBars size="1.5em"/>
                </button>
            </nav>
       </div>
    )
}

export default Navbar
