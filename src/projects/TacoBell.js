import React from 'react';
import {NavLink} from "react-router-dom";
import TBMasthead from './../assets/tacobell/tacobell-thumb.jpg'
import TBGrab1 from './../assets/tacobell/tacobell-specialties.jpg'
import TBGrab2 from './../assets/tacobell/tacobell-search.gif'
import TBGrab3 from './../assets/tacobell/tacobell-mobile3.jpg'


const TacoBell = () => {
    return(
        <div className="Hero page project tb-project">
            <div className="HeroGroup">
                <h2>Taco Bell</h2>
                <img src={TBMasthead} alt="" width="100%"></img>
                <p><NavLink className="visitor" target="_blank" exact to="https://lookwhatwedid.co/vwgolfrrr-awards/" activeClassName="active">Visit Site</NavLink></p>
                <p>Taco Bell came to Deutsch looking for a new way to deliver tasty tacos to the masses. The answer was to rebuild and redesign their site and include a robust feature that no other fast-food company had: an ordering system. I worked along side 3 other developers to make this happen. We worked closely with UX and design teams as the timeline for launch was tight. I not only worked on all global pieces like navigation and search but also helped by giving insight on user experience and design patterns.</p>
                
                <div className="grabs">
                    <img src={TBGrab1} alt="" width="100%"></img>
                    <img src={TBGrab2} alt="" width="100%"></img>
                </div>
                <img src={TBGrab3} alt="" width="100%"></img>

                
                
            </div>
            
        </div> 
    )
}

export default TacoBell;