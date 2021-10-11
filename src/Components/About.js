import React from 'react'
import './About.css'
import { FaSeedling } from 'react-icons/fa'
function About() {
    return (
        <div className="aboutcontainer">
         <h1>...</h1>
            <div className="intro">
            
                <div className="par">
                <h3>Naftali Murimi</h3>
                
                <p><span>Hi</span>, I am from Nyeri county (Karatina). A place of beauty and nature.
                    I love art and design, which  have been influenced in to my life by the people
                    I relate with. My surrounding is also a key influencer in what i have come to like doing
                    .I love simple and natural art with creativity.I am a passionate photographer.
                 </p>
                 <p>
                    I started coding when I joined university as a freshman, Though back then
                    I was coding for it was a requirement in our course work. In my previous years
                    I have come to actually love coding and testing simple Programs to see how they work.
                    I find coding and programming really interesting and enjoyable.
                </p>
                <p>
                    My vision is to encoporate art and design in creating responsive, attractive web 
                    applications that will result to satisfied user experince. Making world a better place than it is right now.
                    
                </p>
                <button>Download CV</button>
                </div>
                <img className="img" src={"./image/Naf.JPG"} alt="HELLO"/>
               
            </div>
        <div className="resume"> 
        <div className="edu">
        <h4>EDUCATION</h4>
        
        <p><b>College</b>Murang'a University of Technology</p>
        <p><b>High School</b>Itundu Secondary School</p>
        <p><b>Primary</b>Itundu Primary School</p>
        
        </div>
        <div className="skill">
        <h4>SKILLS</h4>
            <p ><b>Front end</b>  html, css, javascript</p>
            <p ><b>Back end</b  >php</p>
            <p > <b>FrameWork</b>  React</p>
            <p ><b>Design</b>  canva, photoshop, coreldraw</p>
            <p ><b>Vedio Editting</b>  Adobe preimer pro</p>

            <p><b>Statistics (Data Entry and analysis)</b>  Stata, SPSS</p>
        </div>
                
        </div>
        <div className="help">
            <p>You have a project the you may require some help</p>
            <button>Contact Me</button>
        </div> 
        </div>
        

    )
}

export default About
