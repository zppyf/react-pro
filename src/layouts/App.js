import React,{Component} from "react";
import '../assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import AuthRoute from "../guard/Auth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>
          <AuthRoute path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;