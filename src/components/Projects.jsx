import React from "react";

export default function About() {
    return (
        <section id="projects">
        <div className="projectscont">
            <div className="projectstitle">Some Things I've Built</div>
            <div className="projectsection">
                <a href="https://elaborate-maamoul-c9d4b1.netlify.app/" target="_blank">
                <div className="projecttile">
                    <img className="projectimg" src={'/tradingapipic.png'}></img>
                    <div className="projectrightside">
                    <div className="tiletitle">Mock Trading App</div>
                    <div className="tiledesc">A fullstack app for users to buy and sell stocks for gains and losses.</div>
                    <div className="tilelangs">Node.js, Express.js, MongoDB, bcrypt, Passport.js, React, Chart.js</div>
                    <div className="tilelinkscont">
                        <div className="tilelinks">
                            <a href="https://github.com/mulcharv/tradingfrontend" target="_blank">
                                <img className="tilelinkimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=''/>
                            </a>
                        </div>
                        <div className="tilelinks">
                            <a href="https://elaborate-maamoul-c9d4b1.netlify.app/" target="_blank">
                                <img className="tilelinkimg" src={'/externallink.svg'} alt=''/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
                <a href="https://cerulean-seahorse-473a4d.netlify.app/" target="_blank">
                <div className="projecttile">
                    <img className="projectimg" src={'/blogpic.png'}></img>
                    <div className="projectrightside">
                    <div className="tiletitle">Blogging App</div>
                    <div className="tiledesc">A fullstack app for users to post and comment on the London music scene.</div>
                    <div className="tilelangs">Node.js, Express.js, MongoDB, bcrypt, Passport.js, React</div>
                    <div className="tilelinkscont">
                        <div className="tilelinks">
                            <a href="https://github.com/mulcharv/blogfrontend" target="_blank">
                                <img className="tilelinkimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=''/>
                            </a>
                        </div>
                        <div className="tilelinks">
                            <a href="https://cerulean-seahorse-473a4d.netlify.app/" target="_blank">
                                <img className="tilelinkimg" src={'/externallink.svg'} alt=''/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
                <a href="mulcharv.github.io/shopping-cart/" target="_blank">
                <div className="projecttile">
                    <img className="projectimg" src={'/shoppingcartpic.png'}></img>
                    <div className="projectrightside">
                    <div className="tiletitle">Shopping Cart</div>
                    <div className="tiledesc">A front end mock e-commerce store for the Toronto Raptors.</div>
                    <div className="tilelangs">React, Javascript, CSS</div>
                    <div className="tilelinkscont">
                        <div className="tilelinks">
                            <a href="https://github.com/mulcharv/shopping-cart" target="_blank">
                                <img className="tilelinkimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=''/>
                            </a>
                        </div>
                        <div className="tilelinks">
                            <a href="mulcharv.github.io/shopping-cart/" target="_blank">
                                <img className="tilelinkimg" src={'/externallink.svg'} alt=''/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
                <a href="mulcharv.github.io/battleshipgame/" target="_blank">
                <div className="projecttile">
                    <img className="projectimg" src={'/battleshippic.png'}></img>
                    <div className="projectrightside">
                    <div className="tiletitle">Battleship</div>
                    <div className="tiledesc">A web based human-computer version of the game battleship.</div>
                    <div className="tilelangs">Javascript, CSS, Webpack</div>
                    <div className="tilelinkscont">
                        <div className="tilelinks">
                            <a href="https://github.com/mulcharv/battleshipgame" target="_blank">
                                <img className="tilelinkimg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=''/>
                            </a>
                        </div>
                        <div className="tilelinks">
                            <a href="mulcharv.github.io/battleshipgame/" target="_blank">
                                <img className="tilelinkimg" src={'/externallink.svg'} alt=''/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
        </section>
    )
}