import React, { Component } from "react";
import profileimg from '../../images/profileimage.png';
import css from '../../css/profile.css'

class Profile extends Component {
  render() {
    return (
      <div class="outerprofile">
      <div class="container fluid">
        <div class="row">
          <div class="col-md">
            <div class="card border-dark">
            <img class="card-img-top" src={profileimg} width="100%" alt="profile image"/>
              <div class="card-body">
                <h5 class="card-title text-center">John Doe</h5>
                <p class="card-text text-center "></p>    
              </div>
            </div>
          </div>
          <div class="col-md" >
          <form class="border p-4 border-dark m-2 rounded">
            <div class="form-group">
              <label for="fname">First Name</label>
              <input type="text" class="form-control" id="firstname" placeholder="John" readonly="true"/>
            </div>
            <div class="form-group">
              <label for="lname">Last Name</label>
              <input type="text" class="form-control" id="lastname" placeholder="Doe" readonly="true"/>
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@gmail.com" readonly="true"/>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <textarea id="address" class="form-control" placeholder="1333, North park street Halifax, NS" height="170px" readonly="true"></textarea>
            </div>
            <div class="text-center">
            <button type="submit" class="buttonform" class="btn btn-primary mr-5">Edit</button>
            <button type="submit" class="buttonform" class="btn btn-dark mr-5">Update</button>
            </div>
          </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
 
export default Profile;
