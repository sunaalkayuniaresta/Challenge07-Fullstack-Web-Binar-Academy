import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import check from "../../src/images/check.svg"
import img from "../../src/images/img_service.png"

export default function OurService() {
    return (
        <div>
            <div className="our-service" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 sm-12">
                            <div className="our-service-image">
                                <img src={img} alt="" width="100%"/>
                            </div>
                        </div>
                            <div className="col-md-6 sm-12">
                                <div className="our-service-caption">
                                <h2 className="text-black">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                                </div>
                                <div className="our-service-text">
                                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                                </div>
                                <div className="our-service-list">
                                <img src={check} alt="" />
                                <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                                </div>
                                <div className="our-service-list">
                                <img src={check} alt="" />
                                <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                                </div>
                                <div className="our-service-list">
                                <img src={check} alt="" />
                                <span>Sewa Mobil Jangka Panjang Bulanan</span>
                                </div>
                                <div className="our-service-list">
                                <img src={check} alt="" />
                                <span>Gratis Antar - Jemput Mobil di Bandara</span>
                                </div>
                                <div className="our-service-list">
                                <img src={check} alt="" />
                                <span>Layanan Airport Transfer / Drop In Out</span>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}