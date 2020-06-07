import React, { Component } from "react";
import css from '../../css/footer.css';



class Footer extends Component{
    render(){
        return(
        <footer class="dfooter">
 
		<div class="lfooter">
 
		<h3>FINDABODE</h3>
 
		<p class="copyright"> &copy; 2020 FindAbode. All rights has been reserved.</p>
		</div>
 
		<div class="cfooter">
 
		<div>
		<i class="fa fa-map-marker"></i>
		<p><span>1333, South Park Street</span> Halifax, NS</p>
		</div>
 
		<div>
		<i class="fa fa-phone"></i>
		<p>+1 999 8888881</p>
		</div>
 
		<div>
		<i class="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">contact@findabode.com</a></p>
		</div>
 
		</div>
 
		<div class="rfooter">
 
		<p class="footer-company-about">
		<span>About the company</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nulla vel leo venenatis bibendum et eget metus. Suspendisse quis viverra tortor. In eget nisl arcu. Nunc ac cursus purus, eget molestie mi.
		</p>
 
		<div class="footer-icons">
 
		<a href="#"><i class="fa fa-facebook"></i></a>
		<a href="#"><i class="fa fa-twitter"></i></a>
		<a href="#"><i class="fa fa-linkedin"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>
 
		</div>
		</div>
 
		</footer>
        )
    }
}

export default Footer;