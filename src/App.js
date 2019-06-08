import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Intro from './components/Intro/Intro';
import MemberProfile from './components/MemberProfile/MemberProfile'
import N46Members from "./data/N46Members";

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };



  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return(
      <Router>
        <div className="App" style={{height: '100%'}}>
          <Toolbar show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} data={N46Members}/>
          {backdrop}
          <div className='main'>
            
              <Route exact={true} path="/" component={Intro}/>
              <Route path="/:memberid" component={MemberProfile}/>
            
          </div>
        </div>
      </Router> 
    );
  }
}



export default App; 