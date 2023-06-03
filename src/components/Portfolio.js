import React from 'react'
//import folio1 from '../assets/imgs/folio-1.jpg'
//import folio2 from '../assets/imgs/folio-2.jpg'
//import folio3 from '../assets/imgs/folio-3.jpg'

function Portfolio({ArrayData}) {
    console.log(ArrayData)
  return (
    <section className="section" id="portfolio">
        <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Portfolio</h6>
            <div className="row">
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img src={ArrayData.image} className="portfolio-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p className="font-weight-normal">{ArrayData.description}</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={ArrayData.image}  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p className="font-weight-normal">{ArrayData.description}</p>
                            </span>                         
                        </span>                         
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={ArrayData.image}  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p class="font-weight-normal">{ArrayData.description}</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Portfolio