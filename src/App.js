import { Component } from 'react';
import './App.css';
import Header from './Header/Header';

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
  
        </main>
      </div>
    );
  }
}

export default App;
