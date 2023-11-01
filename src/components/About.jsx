import React from "react";

export default function About() {
    return (
        <section id="about">
        <div className="aboutcont">
            <div className="abouttitle">About Me</div>
            <div className="aboutdesccont">
                <div className="aboutdescfirst">
                Hello! My name is Rahul and I am a passionate software developer who enjoys creating full stack web applications.

                Working in accounting and tax after a Bachelor of Mechanical Engineering, I started to see the huge potential for more efficient and 
                productive solutions that can help people and businesses save and grow their wealth.
                </div>
                <div className="aboutdescpics">
                    <img className="aboutdescimg" src={'/accountingpic.jpg'} alt=''></img>
                    <img className="aboutdescimg" src={'/engineeringpic.jpg'} alt=''></img>
                </div>
                <div className="aboutdescsecond">
                 I decided to leverage the knowledge of reporting financial data
                and the problem solving mindset of an engineer into learning programming for a software developer role in a Fintech firm. 
                
                This prompted a move to London for its industry leading Fintech scene, where I hope to contribute to a solution that can help users financially in a meaningful way.
                </div>
            </div>
        </div>
        </section>
    )
}