import React, { Component } from "react";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import Home from './landing/Home';
import Loginsignup from './loginsignup/Loginsignup';
import Profile from './profile/Profile';
import Contactus from "./contactusaboutus/Contactus";
import Logo from "../images/logo_own.jpg"
import Blogs from "./blogs/Blogs";
import Footer from "./footer/Footer"
 
class Main extends Component {
  
   render() {
    return (
      <div>
      <Router>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="/" ><img src={Logo} width="50" height="50"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <Link class="nav-link" to={"/Loginsignup"}>Login/Signup <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Profile"}>Profile</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Contactus"}>About us/Contact us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/Blogs"}>Blogs</Link>
                </li>
                </ul>
            </div>
        </nav>
            <div>    
              <Route exact path="/" component={Home}/>
              <Route path="/Loginsignup" component={Loginsignup}/>
              <Route path="/Profile" component={Profile}/> 
              <Route path="/Contactus" component={Contactus}/>
              <Route path="/Blogs" component={Blogs}/>
            </div>
      </Router>
      <Footer>
        </Footer>
      </div>
    );
  }
}
 
export default Main;