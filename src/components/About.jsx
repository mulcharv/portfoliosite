import React from "react";

export default function About() {
    return (
        <section id="about">
        <div className="aboutcont">
            <div className="abouttitle">About Me</div>
            <div className="aboutdesccont">
                <div className="aboutdescfirst">
                Hello! My name is Rahul and I am a passionate software developer who enjoys creating full stack web applications.

                Working in public accounting and tax after a Bachelor of Mechanical Engineering, I started to see the huge potential for technology to create 
                more efficient and productive solutions that can help a variety of people and businesses.
                </div>
                <div className="aboutdescpics">
                    <img className="aboutdescimg" src={'/accountingpic.jpg'} alt=''></img>
                    <img className="aboutdescimg" src={'/engineeringpic.jpg'} alt=''></img>
                </div>
                <div className="aboutdescsecond">
                This led me on a self-taught journey of full-stack software development. I hope to use these skills to contribute to a firm that creates meaningful software solutions.
                </div>
            </div>
        </div>
        </section>
    )
}