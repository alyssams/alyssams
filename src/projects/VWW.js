import React from 'react';
import {NavLink} from "react-router-dom";
import VWWMasthead from './../assets/vw/vww/beetle.jpeg'
import VWWGrab1 from './../assets/vw/vww/vw-inventory.png'
import VWWGrab2 from './../assets/vw//vww/vw-inventory-results-beetle.png'

const VWW = () => {
    return(
        <div className="Hero page project vww-project">
            <div className="HeroGroup">
                <h2>VW Rebuild</h2>
                <img src={VWWMasthead} alt="" width="100%"></img>
                <p><NavLink className="visitor" target="_blank" exact to=" https://www.vw.com/inventory/" activeClassName="active">Visit Site</NavLink></p>
                <p>Volkswagen wanted a rebuild of their US website, vw.com and wanted something out of the box different than you would see on a car website. I was on a team of two to prototype the tool that has become Find A Match. This tool helps users find their perfect VW by giving them the ability to customize their desired car quickly and easily. </p>
                <div className="grabs">
                    <img src={VWWGrab1} alt="" width="100%"></img>
                    <img src={VWWGrab2} alt="" width="100%"></img>
                </div>
            </div>
            
        </div> 
    )
}

export default VWW;