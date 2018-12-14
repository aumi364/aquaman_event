import React, { Component } from 'react';
import './resources/styles.css'
 import Header from './components/partials/header';
 import Venue from './components/venueInfo';
 import Highlights from './components/Highlights';

 import Featured from './components/featured';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height : "200vh", background: '#3a3f3f'}}>
         <Header />
         <Featured />
         <Venue/>
         <Highlights/>
      </div>
    );
  }
}

export default App;
