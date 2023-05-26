import React from 'react'
import Man from '../assets/imgs/man.png'

function About() {
  return (
    <section className="section pt-0" id="about">
    
    <div className="container text-center">
       
        <div className="about">
            <div className="about-img-holder">
                <img src={Man} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
            </div>
            <div className="about-caption">
                <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                <p>   
                <b className=''>
                A passionate Full Web Developer having experience of building web application with JavaScript/Reactjs/Nodejs/ Reduxjs and some other cool libraries and frameworks.I'm still enthusiastically learning more programming languages, frameworks, or principles I can integrate into the coding web in my head.Besides coding, I love traveling and meeting new people, playing Cricket or any online game {' '}.
                </b>  
                </p> 
                <button className="btn-rounded btn btn-outline-primary mt-4">{' '}Download CV</button>
            </div>              
        </div>
    </div>
</section>
  )
}

export default About