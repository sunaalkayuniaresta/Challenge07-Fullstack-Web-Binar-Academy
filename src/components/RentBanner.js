import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import { Link } from "react-router-dom";

export default function RentBanner() {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-card">
                                <div className="banner-caption">
                                    <h2 className="text-white">Sewa Mobil di (Lokasimu) Sekarang</h2>
                                </div>
                                <div className="banner-text">
                                    <h6 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                                </div>
                                <Link to={"/carimobil"}className="btn btn-success">
                                    <span className="text-white">Mulai Sewa Mobil</span>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
