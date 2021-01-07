import { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Clock from './Clock/Clock';

class App extends Component {
  constructor() {
    super()
    this.state = {
      navbarOut: false,
    }
  }

  handleNavbar = () => {
    this.setState( {navbarOut: !this.state.navbarOut} );
  }

  render() {
    const {navbarOut} = this.state;
    return (
      <div className="App">
        <Header navbarOut = { navbarOut } handleNavbar = { this.handleNavbar }/>
        <main>
          <Clock />
          <h1 data-text="back in black">It's time for a great project</h1>
        </main>
      </div>
    );
  }
}

export default App;
