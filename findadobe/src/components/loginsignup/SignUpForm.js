import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
//const passwordRegex = RegExp(/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/);
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === '' && (valid = false);
    });
  
    return valid;
  };

class SignUpForm extends Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            formErrors:{
                email:'',
                password:'',
                firstname:'',
                lastname:''
            }
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

        let formErrors = this.state.formErrors;

        switch (name) {
            case "firstname":
              formErrors.firstname =
                value.length < 3 ? "Minimum 3 characaters required" : "";
              break;
            case "lastname":
              formErrors.lastname =
                value.length < 3 ? "Minimum 3 characaters required" : "";
              break;
            case "email":
              formErrors.email = emailRegex.test(value)
                ? ""
                : "Invalid email address";
              break;
            case "password":
              formErrors.password = this.validatePassword(value)
              ? ""
              : "Your password must be at least 8 characters long. It should contain minimum one digit, one special character and letters.";                
              break;
            default:
              break;
          }

        this.setState({
            formErrors,
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(formValid(this.state)){
            console.log("The form was submitted with the following data:");
            console.log(this.state);
        }else{
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    render(){
        const { formErrors } = this.state;
        const isEnabled = formValid(this.state);
        return(
        <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" className="FormField__Input" placeholder="Enter your Full name" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                  {formErrors.firstname.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.firstname}</span>
                    )}
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" className="FormField__Input" placeholder="Enter your Full name" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                  {formErrors.lastname.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.lastname}</span>
                    )}
                </div>
                
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.password}</span>
                    )}
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email Id" name="email" value={this.state.email} onChange={this.handleChange}/>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.email}</span>
                    )}
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20"  disabled={!isEnabled}>Sign Up</button>
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                </div>
              </form>
        </div>
        )
    }
}

export default SignUpForm;