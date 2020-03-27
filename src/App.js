import React, { Component } from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {

    return (
      <div className="App">
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
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
