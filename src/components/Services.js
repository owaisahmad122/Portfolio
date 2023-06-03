import React from 'react'
//import Ana from   '../assets/imgs/analytics.svg';
//import { ReactComponent as scooter } from '../assets/imgs/scooter.svg';
//import Response from   '../assets/imgs/responsive.svg';
//import Tool from   '../assets/imgs/ toolbox.svg';
//import Sdata from '../components/Sdata';


const Services =(data,index) => {
    console.log(this.data.id)
  return (
    <section className="section" id="service">
    <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h6 className="section-title mb-6">Service</h6>
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <div className="service-card">
                    <div className="body">
                        <img src={data} alt="Download Free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                        <h6 className="title">Adipisicing</h6>
                        <p className="subtitle">{data.descrition}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="service-card">
                    <div className="body">
                        <img src={data.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                        <h6 className="title">Sapiente</h6>
                        <p className="subtitle">{data.descrition}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="service-card">
                    <div className="body">
                        <img src={data.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                        <h6 className="title">Placeat</h6>
                        <p className="subtitle">{data.descrition}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="service-card">
                    <div className="body">
                        <img src={data.image} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                        <h6 className="title">Iusto</h6>
                        <p class="subtitle">{data.descrition}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Services