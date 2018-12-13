import React, { Component } from 'react';
import './resources/styles.css'
 import Header from './components/partials/header';
 import Venue from './components/venueInfo';

 import Featured from './components/featured';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height : "200vh", background: '#3a3f3f'}}>
         <Header />
         <Featured />
         <Venue/>
      </div>
    );
  }
}

export default App;
