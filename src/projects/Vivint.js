import React from 'react';
import {NavLink} from "react-router-dom";
import VivintMasthead from './../assets/vivint/vivint.jpg'
import VivintGrab1 from './../assets/vivint/vivint-01.png'
import VivintGrab2 from './../assets/vivint/vivint-02.png'
import VivintGrab3 from './../assets/vivint/vivint-03.png'

const Vivint = () => {
    return(
        <div className="Hero page project vivint-project">
            <div className="HeroGroup">
                <h2>Vivint</h2>
                <img src={VivintMasthead} alt="" width="100%"></img>
                <p><NavLink className="visitor" target="_blank" exact to="https://lookwhatwedid.co/vwgolfrrr-awards/" activeClassName="active">Visit Site</NavLink></p>
                <p>Vivint is a home automation and security company. Vivint approached Deutsch to develop a front-end experience for their new Vivint Sky home automation platform. </p>
				<p>I was on a team of 4 and we developed a series of complex pages for the Vivint technical team to use as a baseline for all new website efforts. The site development was completed inside Vivint's custom CMS. All pages were compiled using Gulp, Compass and Node.js, in order to provide solid performance, optimized assets and a pain-free workflow. This workflow also provided live-reloading the browser, generating sprite sheets and source maps, and flagging code style issues before code was pushed to the repo.</p>
				<p>Our contributions included a 3D rendering sequence and a parallax single page scrolling site that highlighted all major features of the Vivint Sky system. The site serves as a guideline for Vivint's future digital work.</p>

                <div className="grabs">
                    <img src={VivintGrab3} alt="" width="100%"></img>
                    <img src={VivintGrab2} alt="" width="100%"></img>
                    <img src={VivintGrab1} alt="" width="100%"></img>
                </div>

                
                
            </div>
            
        </div> 
    )
}

export default Vivint;