import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';
// import staticdata from './staticdata.json'
import LogoWhite from '../src/assets/white-logo.svg'
import VwGolf from './assets/vw_golf_r_.png'
import Hulu from './assets/hulu.jpg'
import TacoBell from './assets/Taco-Bell-Logo.png'
import Vivint from './assets/vivint.jpg'
import Target from './assets/target.png'
import VW from './assets/vw.png'
import Cmab from './assets/real-california-milk.svg'
import Thisishulu from './assets/thishulu.svg'
import me from './assets/meeee.jpg'

// class component
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      isOpen: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeMenu() {
      document.getElementById("burger").checked = false;;
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {

    return (
      <div className="menu">
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className= {this.state.isOpen ? 'open' : 'closed'}>
            <NavLink className="logo" exact to="/" activeClassName="active"><img src={LogoWhite} alt="AMS"></img></NavLink> 
            {/* <NavLink className={this.state.isOpen ? 'logo logoBlack' : 'logo'} exact to="/" activeClassName="active"></NavLink>  */}
            <input onClick={() => this.toggleMenu()} id="burger" type="checkbox" />
            {/* <label htmlFor="burger">
              <span></span>
              <span></span>
              <span></span>
            </label> */}
            <nav className="navz">
            {/* <div className="about">
              <div className="balls">
                <h3>FUN FACT</h3>
                <p>I've been called on numerous occasions a unicorn. I'd like to think it's because I love color and I'm passionate about digital.</p>
                {staticdata.cells.map(cell => (
                  <div>{cell.fact}</div>
                  
                ))}
              </div>
                
              </div> */}
              
              {/* <div className="projects"> */}
                {/* <h3 className="title">Selected Work</h3> */}
                <ul className="works">
                  <li className="vw"><NavLink onClick={() => this.closeMenu()} exact to="/projects/VW" activeClassName="active"><img src={VwGolf} alt="VW Golf Rrr" width="100%"></img></NavLink></li>
                  <li className="hulu"><NavLink onClick={() => this.closeMenu()} exact to="/projects/Hulu" activeClassName="active"><img src={Hulu} alt="VW Golf Rrr" width="100%"></img></NavLink></li>
                  <li className="tacobell"><NavLink onClick={() => this.closeMenu()} exact to="/projects/TacoBell" activeClassName="active"><img src={TacoBell} alt="Taco Bell" width="50%"></img></NavLink></li>
                  <li className="vivint"><NavLink onClick={() => this.closeMenu()} exact to="/projects/Vivint" activeClassName="active"><img src={Vivint} alt="Vivint" width="100%"></img></NavLink></li>
                  <li className="target"><NavLink onClick={() => this.closeMenu()} exact to="/projects/Target" activeClassName="active"><img src={Target} alt="Target" width="100%"></img></NavLink></li>
                  <li className="vw2"><NavLink onClick={() => this.closeMenu()} exact to="/projects/VWW" activeClassName="active"><img src={VW} alt="VW 2.0" width="60%"></img></NavLink></li>
                  <li className="camilk"><NavLink onClick={() => this.closeMenu()} exact to="/projects/CAMilk" activeClassName="active"><img src={Cmab} alt="California Milk Advisory Board" width="70%"></img></NavLink></li>
                  <li className="thisishulu"><NavLink onClick={() => this.closeMenu()} exact to="/projects/ThisIsHulu" activeClassName="active"><img src={Thisishulu} alt="This Is Hulu" width="90%"></img></NavLink></li>
                </ul>
              {/* </div> */}
              {/* <div className="info">
                <div className="balls">
                    <h2>You make good decisions.</h2>
                    <p>Contact me @</p>
                    <NavLink exact to="#" activeClassName="active">LinkedIn</NavLink>
                    <NavLink exact to="#" activeClassName="active">Email</NavLink>
                    <NavLink exact to="#" activeClassName="active">Instagram</NavLink>
                </div>
              </div> */}
              {/* <div className="megif"> */}
                {/* <img src={me} alt="" width="100%"></img> */}
                {/* {staticdata.cells.map(cell => (
                  <div>{cell.image}</div>
                ))} */}
              {/* </div> */}
              
            </nav>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
