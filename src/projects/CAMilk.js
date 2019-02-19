import React from 'react';
import {NavLink} from "react-router-dom";
import CmabMasthead from './../assets/cmab/cmab.png'
import CmabGrab2 from './../assets/cmab/cmab-02.png'
import CmabGrab3 from './../assets/cmab/cmab-03.png'



const CAMilk = () => {
    return(
        <div className="Hero page project cmab-project">
        <div className="HeroGroup">
            <h2>California Milk Advisory Board</h2>
            <img src={CmabMasthead} alt="" width="100%"></img>
            <p><NavLink className="visitor" target="_blank" exact to="https://www.realcaliforniamilk.com/" activeClassName="active">Visit Site</NavLink></p>
            <p>The California Milk Advisory Board was looking for a fresh look and feel and our team delivered just that. My team rebuilt the site using WordPress, a CMS that the client felt comfortable continue using. We created a one of a kind site that included sounds to get the user in touch with their inner farmer, a spanish version (https://lechedecalifornia.com), fluid and fun animations, HTML5 videos, and responsive design.</p>
            
            <div className="grabs">
                <img src={CmabGrab2} alt="" width="100%"></img>
                <img src={CmabGrab3} alt="" width="100%"></img>
            </div>

            
            
        </div>

        </div> 
    )
}

export default CAMilk;