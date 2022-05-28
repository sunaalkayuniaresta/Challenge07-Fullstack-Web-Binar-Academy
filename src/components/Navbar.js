import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from "../../src/images/rectangle.svg"
import "../style.css"
import Login from '../components/Login/index'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light py-4">
                <div className="container">
                    <img src={rectangle} alt=""/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-1 mb-lg-0 ms-auto" >
                            <li className="nav-item mx-1">
                                <a className="nav-link active" aria-current="page" href="#">Our Service</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link active" href="#">Why Us</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link active" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link active" href="#n">FAQ</a>
                            </li>
                            <li >
                                <Login/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}