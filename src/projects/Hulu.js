import React from 'react';
import {NavLink} from "react-router-dom";
import HuluMasthead from './../assets/hulu/hulu-live-sports-content-01-2019.gif'


const Hulu = () => {
    return(
        <div className="Hero page project hulu-project">
            <div className="HeroGroup">
                <h2>Hulu</h2>
                <img src={HuluMasthead} alt="" width="100%"></img>
                <p><a class="visitor" href="https://www.hulu.com" target="_blank">Visit Site</a></p>

                <p>I am the creative tech lead for digital marketing experiences, internal and external facing.</p>
                
                <h4>Here is a snapshot of a few projects I've worked on:</h4>
                <div class="grabs">
                <div class="sampling">
                    <h3>/Welcome Experience</h3>
                    <p>I was asked to be apart of the redesign of our <a href="https://www.hulu.com/welcome" target="_blank">hulu.com/welcome</a> page. Millions of viewers see this page if they are not a subscriber or are signed out. My role in this project was to help our UX team come up with ideas of how to showcase our brand and retain more subscribers with a more fluid, up to date design. I ideated what this could look like and developed many prototypes for both mobile and desktop. The refresh will go up in April 2019.</p>
                </div>

                <div class="sampling">
                    <h3>/Fyc Rebuild and Redesign</h3>
                    <p>I was the tech lead for rebuilding the current <a href="https://www.hulu.com/fyc" target="_blank">hulu.com/fyc</a> website. This site is important to Hulu as it is the place for voting members to learn more about our shows and to watch them without a Hulu account. I also helped UX and wireframe the redesign by working closely with our designers. To learn more go <NavLink target="_blank" exact to="fyc" activeClassName="active">here</NavLink>.</p>
                </div>

                <div class="sampling">
                    <h3>/Press Rebuild</h3>
                    <p>The <a href="https://www.hulu.com/press" target="_blank">hulu.com/press</a> site is a public facing website that holds all information for Hulu's Press and Corporate Communications. The expected experience is for the press outlets to learn about Hulu's shows, New Exclusive, download approved assets for publication, read press releases, and to watch approved Original content. I am the tech lead on this project and started by developing a strategy, key objectives, requirements, and a project overview of why we needed a rebuild. This included speaking to various members of the marketing and tech teams and work on securing a vendor. We are planning to go live at the end of the year.</p>
                </div>

                <div class="sampling">
                    <h3>Email Template System</h3>
                    <p>Hulu sends thousands of emails to a variety of viewers each month. We needed a better system in place to facilitiate last minute requests, consistency in design, ease of use when creating emails, etc. I created a strategy as to why we needed this, processes, and worked with the vendor, Salesforce in using a modular templating system. Shortly after this system was in place, our emails design and deliver time was cut by 60%, giving us more time to rethink our designs and functionality moving forward.</p>
                </div>
                </div>
            </div>
            
        </div> 
    )
}

export default Hulu;