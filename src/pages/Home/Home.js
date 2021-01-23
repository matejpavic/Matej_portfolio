import { Component } from 'react';
// import Header from '../../components/Header/Header';
import Clock from '../../components/Clock/Clock';
import DynamicText from '../../components/DynamicText/DynamicText';

import './Home.scss';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <Clock />
          <DynamicText />
        </main>
      </div>
    );
  }
}

export default Home;