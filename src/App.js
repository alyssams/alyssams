import React, { Component } from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import CAMilk from './projects/CAMilk';
import Hulu from './projects/Hulu';
import TacoBell from './projects/TacoBell';
import Target from './projects/Target';
import ThisIsHulu from './projects/ThisIsHulu';
import Vivint from './projects/Vivint';
import VW from './projects/VW';
import VWW from './projects/VWW';
import Nav from './Nav';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {

    return (
      <div className="App">
      <Nav/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects/CAMilk" component={CAMilk} />
                <Route path="/projects/Hulu" component={Hulu} />
                <Route path="/projects/TacoBell" component={TacoBell} />
                <Route path="/projects/Target" component={Target} />
                <Route path="/projects/ThisIsHulu" component={ThisIsHulu} />
                <Route path="/projects/Vivint" component={Vivint} />
                <Route path="/projects/VW" component={VW} />
                <Route path="/projects/VWW" component={VWW} />  
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
