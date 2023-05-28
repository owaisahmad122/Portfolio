import React from 'react'
//import Man from '../assets/imgs/man.png'

function About(props) {
   console.log(props);
    
  return (
    <section className="section pt-0" id="about">
    
    <div className="container text-center">
       
        <div className="about">
            <div className="about-img-holder">
                <img src={props.imgsrc} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
            </div>
            <div className="about-caption">
                <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                <p>   
                 {props.description}
                 </p>
                <button className="btn-rounded btn btn-outline-primary mt-4">{' '}Download CV</button>
            </div>              
        </div>
    </div>
</section>
  )
}

export default About