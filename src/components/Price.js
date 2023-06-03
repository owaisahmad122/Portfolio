import React from 'react'
//import scooter from '../assets/imgs/scooter.svg';
//import Ship from '../assets/imgs/shipped.svg';
//import Startup from '../assets/imgs/startup.svg';

function Price({ArrayData}) {
  return (
    <section className="section" id="pricing">
        <div className="container text-center">
            <p className="section-subtitle">How Much I Charge ?</p>
            <h6 className="section-title mb-6">My Pricing</h6>
            <div className="pricing-wrapper">
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={ArrayData.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Free</h6>
                        <div className="pricing-card-list">
                            <p>{ArrayData.descrition}</p>
                            <p><i className="ti-close"></i></p>
                            <p><i className="ti-close"></i></p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>0.0/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={ArrayData.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Basic</h6>
                        <div className="pricing-card-list">
                            <p>{ArrayData.descrition}</p>
                            <p><i className="ti-close"></i></p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>9.99/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={ArrayData.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Premium</h6>
                        <div className="pricing-card-list">
                            <p>{ArrayData.descrition}</p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>99.9/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>

            </div>
        </div> 
    </section>
  )
}

export default Price

