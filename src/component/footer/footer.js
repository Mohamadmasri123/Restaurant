import React from "react";
import "./footer.css"
import { FaYoutube,FaFacebook, FaInstagram ,FaLinkedin } from 'react-icons/fa';




const Footer=()=>{
    return(
            <div className=" footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  col-md-12">
                               <div className="button"> 
                               <a href="#">Register</a>
                                <a href="#">Form</a>
                                <a href="#">Affiliate</a>
                                <a href="#">FAQ</a>
                                </div>
                                <div className="icon"> 
                               <a href="#"><FaYoutube/></a>
                                <a href="#"><FaFacebook/></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaLinkedin /></a>
                                </div>
                                <div className="cpy">
                                    <h2>© 2021. Foodera. All rights reserved.</h2>
                                </div>


                        </div>

                    </div>

                </div>

            </div>

    )
}






export default Footer;