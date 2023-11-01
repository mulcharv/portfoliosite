import React from "react";
import {useRef} from "react";

export default function Home() {

    const projectref = useRef(null);
    const projectClick = () => projectref.current?.scrollIntoView({behaviour: 'smooth'});


    return (
        <section id="home">
            <div className="homecont">
                <div className="introleader">Hi, my name is</div>
                <div className="introname">Rahul Mulchandani.</div>
                <div className="introtagline">I am a fullstack developer.</div>
                <div className="introdesc">Passionate about building applications, 
                devoted to continuous learning and improvement of my skills.</div>
                <a ref={projectref} href="#projects" onClick={projectClick}>
                <div className="introprompt">Check out my work</div>
                </a>
            </div>
        </section>
    )
}