import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"

export default function Faq() {
    return (
        <div className="faq" id="faq">
            <div className="container">
                <div className="row">
                        <div className="col-lg-6">
                            <h2>Frequently Asked Questions</h2>
                                <div className="faq-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="all-accordion">
                        <div className="accordion d-grid gap-3" id="accordionExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus turpis. Donec facilisis libero a orci cursus suscipit. Aenean nunc orci, facilisis id enim non, gravida condimentum nisi. Phasellus tincidunt et massa porttitor sodales. Pellentesque massa neque, placerat in erat laoreet, ultrices hendrerit ligula.</p>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus turpis. Donec facilisis libero a orci cursus suscipit. Aenean nunc orci, facilisis id enim non, gravida condimentum nisi. Phasellus tincidunt et massa porttitor sodales. Pellentesque massa neque, placerat in erat laoreet, ultrices hendrerit ligula.</p>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus turpis. Donec facilisis libero a orci cursus suscipit. Aenean nunc orci, facilisis id enim non, gravida condimentum nisi. Phasellus tincidunt et massa porttitor sodales. Pellentesque massa neque, placerat in erat laoreet, ultrices hendrerit ligula.</p>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus turpis. Donec facilisis libero a orci cursus suscipit. Aenean nunc orci, facilisis id enim non, gravida condimentum nisi. Phasellus tincidunt et massa porttitor sodales. Pellentesque massa neque, placerat in erat laoreet, ultrices hendrerit ligula.</p>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Bagaimana jika terjadi kecelakaan
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus turpis. Donec facilisis libero a orci cursus suscipit. Aenean nunc orci, facilisis id enim non, gravida condimentum nisi. Phasellus tincidunt et massa porttitor sodales. Pellentesque massa neque, placerat in erat laoreet, ultrices hendrerit ligula.</p>
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