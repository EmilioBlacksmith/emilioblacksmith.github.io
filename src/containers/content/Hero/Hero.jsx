import './Hero.css';
import React from 'react';
import ProfilePicture from '/assets/Images/alpha_profile.webp'

export function Hero(){
    const stack = ["", "", "", "", "", "", "󰚯", "󰦱", "","󱏿", "", ""];

    return (
        <section className="hidden" id='Hero-Section'>
            <div className='hero_data'>
                <div className='hero_intro'>
                    <img src={ProfilePicture} className='hero_profile' alt='profile picture of Emilio Blacksmith' width={'50%'} height={'auto'}/>
                    <div className='hero_cta'>
                        <h1>HOWDY! 🤠</h1>
                        <p>I make Development fun to watch (Sometimes...)</p>
                        <div className='hero_cta_buttons'>
                            <a href='#Portfolio-Section'>My Portfolio</a>
                            <a href='/'>Resume</a>
                        </div>
                    </div>
                </div>
                <div className='hero_aboutme'>
                    <div className='hero_whoami'>
                        <h2>WHO AM I?</h2>
                        <p>I'm Emilio Herrera (also known as Emilio Blacksmith in my projects and the internet). I'm a Software Developer from México, I studied Interactive Design (UX / UI), with a focus on Development.</p>
                        <p>I make youtube videos about development, from game development to application development. I started making apps and videogames since 2017, my passion is to bring new and interesting experiences to my users. </p>
                    </div>
                    <div className='hero_tech'>
                        <h2>MY TECH STACK</h2>
                        <nav className='tech'>
                            {stack.map((stack) => (
                                <object key={stack}>{stack}</object>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}