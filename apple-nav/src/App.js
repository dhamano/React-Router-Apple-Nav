import React, { Component } from 'react';
import MainNav from './components/MainNav';
import SubNav from './components/SubNav';

import { Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    navList: ["Mac","iPad","iPhone","Watch","TV","Music","Support","Search","Cart"],
    subNavList: {
      Mac     : ["MacBook", "MacBook Air", "MacBook Pro", "iMac"],
      iPad    : ["iPad Pro", "iPad Air", "iPad", "iPad mini"],
      iPhone  : ["iPhone Xs", "iPhone Xr", "iPhone 8", "iPhone 7"],
      Watch   : ["Apple Watch Series 4", "Apple Watch Nike+", "Apple Watch Hermes"],
      TV      : ["Apple TV app", "Apple TV+", "Apple TV 4K", "Apple TV HD"],
      Music   : ["Apple Music", "iTunes", "HomePod", "AirPods", "iPod touch"]
    },
    selected: ''
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={ props => <MainNav {...props} navList={this.state.navList} />} />
        <Route path="/:subNavName" render={ props => <SubNav {...props} subNavList={this.state.subNavList} />} />
      </div>
    );
  }
}
