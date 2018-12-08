import React, { Component } from 'react';
import './resources/styles.css'
 import Header from './components/partials/header';

 import Featured from './components/featured';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height : "200vh", background: '#3a3f3f'}}>
         <Header />
         <Featured />
      </div>
    );
  }
}

export default App;
