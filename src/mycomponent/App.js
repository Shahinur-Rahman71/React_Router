import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './RoutingPart/Navigation';
import Routing from './RoutingPart/Routing';


class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <Navigation/>
          <Routing/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
