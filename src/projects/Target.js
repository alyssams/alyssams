import React from 'react';
import {NavLink} from "react-router-dom";
import TargetMasthead from './../assets/target/TargetMasthead.jpg'
import TargetGrab2 from './../assets/target/TargetGrab1.png'
import TargetGrab3 from './../assets/target/TargetGrab2.png'



const Target = () => {
    return(
        <div className="Hero page project target-project">
        <div className="HeroGroup">
            <h2>Target</h2>
            <img src={TargetMasthead} alt="" width="100%"></img>
            <p><NavLink className="visitor" target="_blank" exact to="https://corporate.target.com/article/2014/04/made-to-matter-handpicked-by-target" activeClassName="active">Visit Site</NavLink></p>
            <p>I worked with Target in creating The Blogger Project, which is a part of their Made To Matter collection. Made To Matter showcased brands that feature sustainable, organic, and natural products. The Blogger Project concentrated on 4 different bloggers that tried different products and shared their experiences.</p>

            <p>This project was hosted on Target's CMS platform so it required a lot of legwork to understand. Part of the learnings of this project was hammering out their accessbility rules and product aggregation. It was great working on a project because I learned a lot about accessbility and how a major company like Target documented their tech processes.</p>
            
            <div className="grabs">
                <img src={TargetGrab2} alt="" width="100%"></img>
                <img src={TargetGrab3} alt="" width="100%"></img>
            </div>

            
            
        </div>

        </div> 
    )
}

export default Target;