
<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->


# Assignment 2


This assignment contains web pages required for any 4 features from the project. 
Our project "FindAbode" is a apartment rental web application that will allow users to easily find available apartments in their choice of area.
  
*  *Date Created*: 07 JUN 2020

*  *Last Modification Date*: 14 JUN 2020

Github repository: [https://github.com/diwansimran/assignemnt2-web](https://github.com/diwansimran/assignemnt2-web)

Heroku deployment link: [https://assignment2-findabode.herokuapp.com/](https://assignment2-findabode.herokuapp.com/)  

## Authors  

*  [Simranbanu Roshansha Diwan](sm582590@dal.ca) 

## Getting Started
  

### Prerequisites

  

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```

Editor (e.g. VSCode)
npm 

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

  

### Installing

  

A step by step series of examples that tell you how to get a development env running


```

After cloning the project, run npm install -> It will install the required dependencies

```
## Deployment

  

I have deployed this assignemnt on heroku.

Please check out the live project on the following link:
[https://assignment2-findabode.herokuapp.com/](https://assignment2-findabode.herokuapp.com/)

  

## Built With


* [create-react-app](https://create-react-app.dev/) - The project initialer used
* [react](https://reactjs.org/) - Front-end framework

## Links of built pages
*Landing page: [https://assignment2-findabode.herokuapp.com/](https://assignment2-findabode.herokuapp.com/)

*Register and Log in: [https://assignment2-findabode.herokuapp.com/Loginsignup](https://assignment2-findabode.herokuapp.com/Loginsignup)

*View profile: [https://assignment2-findabode.herokuapp.com/Profile](https://assignment2-findabode.herokuapp.com/Profile)

*About us/Contact us: [https://assignment2-findabode.herokuapp.com/Contactus](https://assignment2-findabode.herokuapp.com/Contactus)

*Blogs: [https://assignment2-findabode.herokuapp.com/Blogs](https://assignment2-findabode.herokuapp.com/Blogs)

## Justification of design choices
* Navigation bar and footer color: Dark grey 
Reason: As the main background color of web pages is white, the dark choice of color for header and footer makes website attractive using contrast.
* Main background color of pages: White
Reason: White color improves clarity, readibilit and makes it suitable for older generation too.
* Type of fonts: Sans Serif
Reason: Snas serif fonts for headings improves readibility regardless of distance as they stand-out better.
* Framework: I have used react framework for developing front-end. 
Reasons: It is simple, fast and highly scalable. It allows to develop and re-use individual components. It provides virtual DOM which provides high quality user experience and high performance.


## Sources Used

### Image references
Used in Home.js
https://www.ownalandmark.com/our-homes/photo-galleries/gallery-bedrooms/
https://www.residencestyle.com/21-beautiful-wooden-bed-interior-design-ideas/

Used in Contactus.js
http://www.msa-scotland.net/?p=55

Used as profile image in Profile.js
https://www.kindpng.com/imgv/iwoJww_female-user-avatar-woman-profile-member-user-profile/

### Logo design tool
Designed logo using an online tool: freelogodesign.org
(https://www.freelogodesign.org/)

### SignUpForm.js

*Lines 124 - 156*

```

<div  className="FormField">

<label  className="FormField__Label"  htmlFor="firstname">First Name</label>

<input  type="text"  id="firstname"  className="FormField__Input"  placeholder="Enter your Full name"  name="firstname"  value={this.state.firstname}  onChange={this.handleChange}/>

{formErrors.firstname.length > 0 && (

<span  className="errorMessage"><br/>{formErrors.firstname}</span>

)}

</div>

<div  className="FormField">

<label  className="FormField__Label"  htmlFor="lastname">Last Name</label>

<input  type="text"  id="lastname"  className="FormField__Input"  placeholder="Enter your Full name"  name="lastname"  value={this.state.lastname}  onChange={this.handleChange}/>

{formErrors.lastname.length > 0 && (

<span  className="errorMessage"><br/>{formErrors.lastname}</span>

)}

</div>

<div  className="FormField">

<label  className="FormField__Label"  htmlFor="password">Password</label>

<input  type="password"  id="password"  className="FormField__Input"  placeholder="Enter your password"  name="password"  value={this.state.password}  onChange={this.handleChange}/>

{formErrors.password.length > 0 && (

<span  className="errorMessage"><br/>{formErrors.password}</span>

)}

</div>

<div  className="FormField">

<label  className="FormField__Label"  htmlFor="email">Email Address</label>

<input  type="email"  id="email"  className="FormField__Input"  placeholder="Enter your Email Id"  name="email"  value={this.state.email}  onChange={this.handleChange}/>

{formErrors.email.length > 0 && (

<span  className="errorMessage"><br/>{formErrors.email}</span>

)}

</div>

<div  className="FormField">

<button  className="FormField__Button mr-20"  disabled={!isEnabled}>Sign Up</button>

<Link  to="/sign-in"  className="FormField__Link">I'm already member</Link>

</div>

</form>

  

```

  

The code above was created by adapting the code in ([https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs)) as shown below:
  
-   The code in [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) was implemented by referring major fields and attributes needed for creating registeration form.

- [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) Code was used because it provided good guidance on creating registration form in react

-  [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) Code was highly modified according to required fields. I also added front end validations and changed styling in terms of color, look and feel, responsiveness, etc. 

*Repeat as needed*

  

### loginsignup.css

  

*Lines 23 - 75*

  

```

.PageSwitcher {

display: flex;

justify-content: flex-end;

margin-bottom: 10%;

}

.PageSwitcher__Item {

background-color: #4C5D72;

color: #9DA6B1;

padding: 10px  25px;

cursor: pointer;

font-size: .9em;

border: none;

outline: none;

display: inline-block;

text-decoration: none  !important;

}

.PageSwitcher__Item:hover{

color: #9DA6B1;

text-decoration: none  !important;

opacity: 0.8;

}

.PageSwitcher__Item--Active {

background-color: #5ED0C0;

color: white;

}

.PageSwitcher__Item--Active:hover{

text-decoration: none  !important;

color: white;

opacity: 1;

}

.PageSwitcher__Item:first-child {

border-top-left-radius: 25px;

border-bottom-left-radius: 25px;

}

.PageSwitcher__Item:last-child {

border-top-right-radius: 25px;

border-bottom-right-radius: 25px;

}

.section{

width: 100%;

display: flex;

flex-direction: column;

align-items: center;

justify-content: center;

}  

```

  

The code above was created by adapting the code in [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) as shown below:

-   The code in [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) was implemented by refering how to create css for implementing page switcher for log in and sign up.

-  [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) Code was used because it provided with good reference on how to create different react components and their styling for implementing page switcher.

-  [https://www.youtube.com/watch?v=56E8b9prPTs](https://www.youtube.com/watch?v=56E8b9prPTs) Code was highly modified by changing decoration style, hover effects, color scheme. I also implemented additional styles for extra error fields. U also changed styling to make this page responsive.
  

### footer.css


*117- 136*


```
@media (max-width: 880px) {

.dfooter{

font: bold  14px  sans-serif;

}

.dfooter  .lfooter,

.dfooter  .cfooter,

.dfooter  .rfooter{

display: block;

width: 100%;

margin-bottom: 40px;

text-align: center;

}

.dfooter  .cfooter  i{

margin-left: 0;

}

}
```

The code above was created by adapting the code in [https://webdevtrick.com/html-css-footer/](https://webdevtrick.com/html-css-footer/) as shown below:

-   The code in [https://webdevtrick.com/html-css-footer/](https://webdevtrick.com/html-css-footer/) was implemented by referring how to write media queries for making footer responsive

-  [[https://webdevtrick.com/html-css-footer/](https://webdevtrick.com/html-css-footer/) Code was used because it is very importnant to have a responsive footer and it provided great reference for that.

-  [https://webdevtrick.com/html-css-footer/](https://webdevtrick.com/html-css-footer/) Code was hughly modified according to the responsiveness I need for the application. Also removed unnecessary sections which were not needed.

Original source code:
```
@media (max-width: 880px) {

.footer-distributed{

font:  bold  14px  sans-serif;

}

.footer-distributed .footer-left,

.footer-distributed .footer-center,

.footer-distributed .footer-right{

display:  block;

width:  100%;

margin-bottom:  40px;

text-align:  center;

}

.footer-distributed .footer-center i{

margin-left:  0;

}

.main {

line-height:  normal;

font-size:  auto;

}

}
```

## Acknowledgments
  
* [https://webdevtrick.com/](https://webdevtrick.com/)
* TheCodePro: [https://www.youtube.com/channel/UC8QVCQsp1YCgTI--nACeZsw](https://www.youtube.com/channel/UC8QVCQsp1YCgTI--nACeZsw)
