import React from 'react'
import './Contact.css'
import { FaEdge, FaEnvelope,  FaLocationArrow, FaPhone,  FaTelegram } from 'react-icons/fa'
function Contacts() {
    return (
        <div className="concontainer">
            <h1>CONTACT</h1>
            <div className="holder">
            <div className="contact">
                <p className="p"> <FaPhone color="white" size="2em"/> <b>+254 796641860</b>  </p>
                <p className="p"> <FaEnvelope color="white" size="2em"/> <b>nafmurimi@gmail.com</b>  </p>
                <p className="p"> <FaTelegram color="white" size="2em"/> <b>0796641860</b>  </p>
                <p className="p"> <FaLocationArrow color="white" size="2em"/> <b>Karatina Town</b>  </p>
            </div>
            <div className="conform">
                <form action="">
                    <input type="text" placeholder="Your Name"/><br />
                    <input type="email" placeholder="   Your Email Adress" /><br />
                    <textarea name="" id=""></textarea>
                    <button><FaEdge/> Send</button>
                </form>
            </div>
            </div>
        <div className="loc"></div>
        </div>
    )
}

export default Contacts
