import React, { Component } from "react";
import aboutus from '../../images/aboutus.jpg';
import css from '../../css/contactus.css'


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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


class Contactus extends Component {

  constructor(){
    super();
    this.state={
        lastname:'',
        firstname:'',
        email:'',
        query:'',
        formErrors:{
            lastname:'',
            firstname:'',
            email:'',
            query:''
        }
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(formValid(this.state)){
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        this.setState({
          lastname:'',
          firstname:'',
          email:'',
          query:'',
          formErrors:{
              lastname:'',
              firstname:'',
              email:'',
              query:''
        }
        })
        alert('You submitted the form.');
    }else{
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        alert('Form is invalid.');
    }
  }

  handleChange(e){

    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.id;

    let formErrors = this.state.formErrors;

    switch (name) {
        case "firstname":
          formErrors.name =
            value.length < 1 ? "First name can not be empty" : "";
          break;
        case "lastname":
          formErrors.name =
            value.length < 1 ? "Last name can not be empty" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "Invalid email address";
          break;
        case "query":
          formErrors.name =
            value.length < 10 ? "Query requires minimum 10 characters" : "";
          break;
        default:
          break;
      }

    this.setState({
        formErrors,
        [name]: value
    })
  }


  render() {
    const { formErrors } = this.state;
    return (
      <div className="about-section">
          <img src={aboutus} alt="aboutus" width="100%"/> 
          <h1>Our Values</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus mauris, facilisis sed rutrum at, pharetra eget augue. Nulla rhoncus nunc quam. Mauris aliquet sit amet ipsum at hendrerit. Sed eget consectetur diam, eu laoreet nunc. Aliquam erat volutpat. Curabitur laoreet, diam at vehicula cursus, magna mi efficitur mi, sit amet faucibus quam mauris quis justo. Aliquam cursus hendrerit eros, a rutrum neque auctor et. Duis cursus at ante sit amet aliquet. Phasellus imperdiet ipsum id lacus lobortis viverra vel sed diam. Aenean odio massa, faucibus sit amet fringilla id, tempor id diam. Curabitur sit amet tortor ac neque consequat ullamcorper quis id urna. Morbi efficitur tellus quis hendrerit dignissim. Nam scelerisque suscipit ligula, nec consequat enim. Donec eu sagittis lorem. Integer eu ante urna. Nam efficitur nulla vulputate sapien bibendum vestibulum.
          </p>
          <h1>Our Services</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus mauris, facilisis sed rutrum at, pharetra eget augue. Nulla rhoncus nunc quam. Mauris aliquet sit amet ipsum at hendrerit. Sed eget consectetur diam, eu laoreet nunc. Aliquam erat volutpat. Curabitur laoreet, diam at vehicula cursus, magna mi efficitur mi, sit amet faucibus quam mauris quis justo. Aliquam cursus hendrerit eros, a rutrum neque auctor et. Duis cursus at ante sit amet aliquet. Phasellus imperdiet ipsum id lacus lobortis viverra vel sed diam. Aenean odio massa, faucibus sit amet fringilla id, tempor id diam. Curabitur sit amet tortor ac neque consequat ullamcorper quis id urna. Morbi efficitur tellus quis hendrerit dignissim. Nam scelerisque suscipit ligula, nec consequat enim. Donec eu sagittis lorem. Integer eu ante urna. Nam efficitur nulla vulputate sapien bibendum vestibulum.
          </p>
          <div className="outerform">
          <form className="border mt-5 p-4 border-dark text-left" onSubmit={this.handleSubmit}>
            <h5 className="card-title text-center">We would like to hear from you!</h5>
            <div className="form-group">
              <label for="firstname">First Name</label>
              <input type="text" className="form-control" id="firstname" placeholder="John" value={this.state.firstname} onChange={this.handleChange}/>
              {formErrors.firstname.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.firstname}</span>
                    )}
            </div>
            <div className="form-group">
              <label for="lastname">Last Name</label>
              <input type="text" className="form-control" id="lastname" placeholder="Doe" value={this.state.lastname} onChange={this.handleChange}/>
              {formErrors.lastname.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.lastname}</span>
                    )}
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="johndoe@gmail.com" value={this.state.email} onChange={this.handleChange}/>
              {formErrors.email.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.email}</span>
                    )}
            </div>
            <div className="form-group">
              <label for="query">Query</label>
              <textarea id="query" className="form-control" placeholder="Please write your query here..." height="170px" value={this.state.query} onChange={this.handleChange}></textarea>
              {formErrors.query.length > 0 && (
                    <span className="errorMessage"><br/>{formErrors.query}</span>
                    )}
            </div>
            <div className="text-center">
            <button type="submit" className="buttonform" className="btn btn-primary mr-5">Submit</button>
            </div>
          </form>
          </div>
          <br />
          <div className="container">
            <div className="row">
                <div className="contact-card col-sm-4">
                <i className="fa fa-map-marker"></i>
                1333 South Park Street,
                 Halifax, NS
                </div>
                <div className="contact-card col-sm-4">
                <i className="fa fa-phone"></i>
                <a href="tel:+19998888881">+1 999 8888881</a>
                </div>
                <div className="contact-card col-sm-4">
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:contact@findadobe.com">contact@findadobe.com</a>
                </div>
              </div>
          </div>
          </div>


    )
  }
}

export default Contactus;