import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import img1 from "../../src/images/icon_complete.svg"
import img2 from "../../src/images/icon_price.svg"
import img3 from "../../src/images/icon_24hrs.svg"
import img4 from "../../src/images/icon_professional.svg"


export default function WhyUs() {
    return(
        <div>
            <div className="why-us" id="why">
                <div className="container">
                    <div className="row">
                        <div className="why-us-caption">
                            <h2 className="text-black">Why Us?</h2>
                        </div>
                        <div className="why-us-text">
                            <p>Mengapa harus pilih Binar Car Rental?</p>
                        </div>
                        <div className="why-us-cards"> 
                            <div className="row">
                                <div className="col-md-3 sm-6">
                                <div className="card">
                                    <div className="card-body">
                                    <img src={img1} alt="" />
                                    <h5 className="card-title text-black">Mobil Lengkap</h5>
                                    <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 sm-6">
                                <div className="card">
                                    <div className="card-body">
                                    <img src={img2} alt="" />
                                    <h5 className="card-title text-black">Harga Murah</h5>
                                    <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 sm-6">
                                <div className="card">
                                    <div className="card-body">
                                    <img src={img3} alt="" />
                                    <h5 className="card-title text-black">Layanan 24 Jam</h5>
                                    <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 sm-6">
                                <div className="card">
                                    <div className="card-body">
                                    <img src={img4} alt="" />
                                    <h5 className="card-title text-black">Sopir Profesional</h5>
                                    <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}