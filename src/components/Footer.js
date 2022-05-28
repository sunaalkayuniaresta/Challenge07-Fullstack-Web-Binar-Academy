import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from "../../src/images/rectangle.svg"
import facebook from "../../src/images/icon_facebook.svg"
import instagram from "../../src/images/icon_instagram.svg"
import twitter from "../../src/images/icon_twitter.svg"
import mail from "../../src/images/icon_mail.svg"
import twitch from "../../src/images/icon_twitch.svg"
import "../style.css"

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col">
                        <p className="mb">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className="mb">binarcarrental@gmail.com</p>
                        <p className="mb">081-233-334-808</p>
                    </div>
                    <div className="col-md-2"> 
                        <p className="title-sm">Our Service</p>
                        <p className="title-sm">Why Us</p>
                        <p className="title-sm">Testimonial</p>
                        <p className="title-sm">FAQ</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col">
                        <p>Connect With Us</p>
                        <div className="icon-holder">
                            <img src={facebook} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={mail} alt=""/>
                            <img src={twitch} alt=""/>
                        {/* <i className="fa-brands fa-facebook-f mx-2 my-1"></i>
                        <i className="fa-brands fa-instagram mx-2 my-1"></i>
                        <i className="fa-brands fa-twitter mx-2 my-1"></i>
                        <i className="fa-regular fa-envelope mx-2 my-1"></i>
                        <i className="fa-brands fa-twitch mx-2 my-1"></i> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col">
                        <p>Copyright Binar 2022</p>
                        <img src={rectangle} alt=""/>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}