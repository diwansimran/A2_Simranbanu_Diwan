import React,{Component, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


class SignInForm extends Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    validatePassword(password){
      if (password.length < 8)
          return false;
      let hasUpperCase = /[A-Z]/.test(password);
      let hasLowerCase = /[a-z]/.test(password);
      let hasNumbers = /\d/.test(password);
      let hasNonalphas = /\W/.test(password);
      if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3)
          return false;
      else {
          return true;
      }
    }

    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
      e.preventDefault();
      if(emailRegex.test(this.state.email) && this.validatePassword(this.state.password)){
        
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        this.setState({
          email:'',
          password:''
        })
        alert('You have successfully logged in.');
      }else{
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        alert('Wrong email id or password.');
      }
        
    }
    render(){
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;          
    return(
          <div className="FormCenter" >
                <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email Id" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  <div className="FormField">
                    <button className="FormField__Button mr-20" disabled={!isEnabled}>Sign In</button><Link exact="true" to="/Loginsignup" 
                    className="FormField__Link">Create an account</Link>
                  </div>
                </form>
          </div>
        
    )}
}

export default SignInForm;