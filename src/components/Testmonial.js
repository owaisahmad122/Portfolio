import React from 'react'
import Avatar1 from '../assets/imgs/avatar2.jpg'
import Avatar2 from '../assets/imgs/avatar3.jpg'

function Testmonial() {
  return (
    <section classNameName="section" id="testmonial">
        <div classNameName="container text-center">
            <p classNameName="section-subtitle">What Think Client About Me ?</p>
            <h6 classNameName="section-title mb-6">Testmonial</h6>

            
            <div classNameName="row">
                <div classNameName="col-md-6">
                    <div classNameName="testimonial-card">
                        <div classNameName="testimonial-card-img-holder">
                            <img src={Avatar1} classNameName="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>                           
                        </div>
                        <div classNameName="testimonial-card-body">
                            <p classNameName="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 classNameName="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
                <div classNameName="col-md-6">
                    <div classNameName="testimonial-card">
                        <div classNameName="testimonial-card-img-holder">
                            <img src={Avatar2} classNameName="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>                        
                        </div>
                        <div classNameName="testimonial-card-body">
                            <p classNameName="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Testmonial