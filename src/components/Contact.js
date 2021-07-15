import React from 'react';
import '../Styles/Contact.scss'

function Contact() {
    return (
        <section id="contact" className="container-fluid">
            <div class="container" style={{maxWidth:"980px"}}>
                <h2 class="text-left mt-0">Contact</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fa fa-map-marker mb-4"></i>
                            <h3 class="h4 mb-2">Localisation</h3>
                            <p class="text-muted mb-0">Lot IIF72HSAL Andraisoro,<br/>
                            <strong className="purple">IMTICIA5</strong>,Institut Supérieur  Polytechnique de Madagascar Antsobolo 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fa fa-envelope mb-4" aria-hidden="true"></i>
                            <h3 class="h4 mb-2">Email</h3>
                            <p class="text-muted mb-0">mn.sandratra@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fa fa-phone mb-4" aria-hidden="true"></i>
                            <h3 class="h4 mb-2">Telephone</h3>
                            <p class="text-muted mb-0">+261324612431 <br/>
                                    +261345216098
                                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Contact;