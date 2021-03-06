import React from 'react';
import linkedin from './assets/linked.svg'
import instagram from './assets/ig.svg'
import chat from './assets/chat.svg'
import github from './assets/github1.svg'

const Home = () => {
    return(
        <div className="Hero page homepage">
            <div className="HeroGroup">
                <h1>Hello!</h1>
                <p>Alyssa makes stuff for the Internet. She’s a creative technologist at heart but spends a good portion of time managing how digital experiences come to life. Alyssa is passionate about her work and loves helping brands become successful. She loves going on adventures. She is currently a <a href="https://www.hulu.com" target="_blank">Hulugan</a>.</p>
                <div className="details">
                    <ul>
                        <li className="Linkedin"><a href="https://www.linkedin.com/in/alyssams" target="_blank"><img src={linkedin} alt="Linkedin"></img></a></li>
                        <li className="Instagram"><a href="https://www.instagram.com/alyssa.saucedo/" target="_blank"><img src={instagram} alt="Instagram"></img></a>
                        </li>
                        <li className="Github"><a href="https://github.com/alyssams" target="_blank"><img src={github} alt="Github"></img></a>
                        </li>
                        <li className="Bot"><a href="https://alyssams.github.io/chatbot/" target="_blank"><img src={chat} alt="Chat Bot"></img></a></li>
                    </ul>
                    
                </div>
            </div>
            
        </div> 
    )
}

export default Home;