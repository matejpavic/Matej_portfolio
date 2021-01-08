import { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Clock from './Clock/Clock';
import DynamicText from './DynamicText/DynamicText';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Clock />
          <DynamicText />
        </main>
      </div>
    );
  }
}

export default App;
