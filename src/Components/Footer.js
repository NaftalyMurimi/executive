import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'
import { FaEnvelope, FaPhone, FaTwitter, FaWhatsapp, FaYoutube} from 'react-icons/fa';
function Footer() {
    const styles={
        padding: '20',
        
    };
    return (
        <div className="foot">
            <div className="content">
                <div className="sec info">
                <h2>Murimi Naftaly</h2>
                <p>I am a web designer and developer.
                    I also do Graphic designs using canva, Photoshop and Coreldraw.
                    Am also a passionate photographer,
                    Art is my passion and I love chess game.
                </p>
                </div>
                <div className="sec links">
                <h2>links</h2>
                <ul className="ulist">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Projects"><li>Projects</li></Link>
                    <Link to="/Contacts"><li>Contacts</li></Link>
                </ul>
                </div>
                <div className="sec  social">
                <h2>Social Links</h2>
                <FaPhone style={styles} color="lightblue" size="2em"/>
                <FaYoutube style={styles} color="red" size="2em" />
                <FaEnvelope style={styles} color="white" size="2em"/>
                <FaTwitter style={styles} color="cornflowerblue" size="2em"/>
                <FaWhatsapp style={styles}  color="green" size="2em"/>

                </div>
            </div>
            <div className="copy">
            <h3> &copy; @naftaly2021 </h3>
            
      
            </div>
        </div>
    )
}

export default Footer
