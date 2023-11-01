import React from "react";
import {useRef} from "react";


export default function Navbar() {
    const homeref = useRef(null);
    const aboutref = useRef(null);
    const skillsref = useRef(null);
    const projectref = useRef(null);
    const contactref = useRef(null);

    const homeClick = () => homeref.current?.scrollIntoView({behaviour: 'smooth'});
    const aboutClick = () => aboutref.current?.scrollIntoView({behaviour: 'smooth'});
    const skillsClick = () => skillsref.current?.scrollIntoView({behaviour: 'smooth'});
    const projectClick = () => projectref.current?.scrollIntoView({behaviour: 'smooth'});
    const contactClick = () => contactref.current?.scrollIntoView({behaviour: 'smooth'});


    return (
        <div className="navcont">
            <a ref={homeref} href="#home" onClick={homeClick}>
                <div className="navhomelink">R.M</div>
            </a>
            <nav className="navlinkcont">
                <a ref={aboutref} href="#about" onClick={aboutClick}>
                    About
                </a>
                <a ref={skillsref} href="#skills" onClick={skillsClick}>
                    Skills
                </a>
                <a ref={projectref} href="#projects" onClick={projectClick}>
                    Projects
                </a>
                <a ref={contactref} href="#contact" onClick={contactClick}>
                    Contact
                </a>
                <a href={'/RahulMulchandaniResume.pdf'} target="_blank">
                <div className="navresumelink">Resume</div>
                </a>
            </nav>
            
        </div>
        
    )
}