import React, { Component } from "react";
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import css from '../../css/loginsignup.css'

class Loginsignup extends Component {
  render() {
    return (
      <Router>
        <div class="Aligncentrehv">
          <Card style={{ width: '50rem'}}>
             <Card.Body>
              <div className="App__Form">
                <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign in</NavLink>
                  <NavLink exact to="/Loginsignup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign up</NavLink>
                </div>
                <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>or<NavLink exact to="/Loginsignup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign up</NavLink>
                </div>
                <Route exact path="/Loginsignup" component={SignUpForm}>
                  
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                  
                </Route>
              </div>
            </Card.Body>
          </Card>
       </div>
    </Router>
    )
  }
}
 
export default Loginsignup;
