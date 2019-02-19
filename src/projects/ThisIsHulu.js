import React from 'react';
import {NavLink} from "react-router-dom";

const ThisIsHulu = () => {
    return(
        <div className="Hero page">
            <div className="HeroGroup">
                <h1>This Is Hulu</h1>
                <p>ThisIsHulu PAGE <NavLink exact to="https://www.hulu.com" activeClassName="active">Hulugan</NavLink>.</p>

            </div>
            
        </div> 
    )
}

export default ThisIsHulu;