import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import SideDrawer from './Components/Layout/Sidebar'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/displayNotes' component={SideDrawer}></Route>
      </Switch>

    </div>
    );
  }
}




export default App;

