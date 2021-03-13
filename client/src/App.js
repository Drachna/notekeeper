import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import SideDrawer from './Components/Layout/Sidebar'
import Navbar from './Components/Layout/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Navbar}></Route>
        <Route path='/displayNotes' component={SideDrawer}></Route>
      </Switch>
    </div>
    );
  }
}




export default App;

