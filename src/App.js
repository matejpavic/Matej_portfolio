import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
           <Home />
          </Route> 
          <Route exact path='/projects'>
           <Projects />
          </Route> 
          <Route exact path='/about'>
           <About />
          </Route> 
          <Route exact path='/contact'>
           <Contact />
          </Route> 
        </Switch>
      </Router>
    );
  }
}

export default App;