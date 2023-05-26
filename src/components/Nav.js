import React , { useState } from 'react'
import '../assets/components/port.css';

 

function Nav() {
   const [toggle, setToggle] = useState(true);
  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
    <div className="container">
        <a className="logo" href="#">Owais   Ahmad</a> 
        {
            toggle && (
        <ul className="nav" >
            <li className="item">
                <a className="link" href="#home">Home</a>
            </li>
            <li className="item">
                <a className="link" href="#about">About</a>
            </li>
            <li className="item">
                <a className="link" href="#portfolio">Portfolio</a>
            </li>
            <li className="item">
                <a className="link" href="#testmonial">Testmonial</a>
            </li>
            <li className="item">
                <a className="link" href="#blog">Blog</a>
            </li>
            <li className="item">
                <a className="link" href="#contact">Contact</a>
            </li>
            <li className="item ml-md-3">
                <a href="components.html" className="btn btn-primary">Components</a>
            </li>
        </ul>
            )
}

        <a href="javascript:void(0)" onClick={ () => setToggle(!toggle)} id="nav-toggle" className="hamburger hamburger--elastic">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
        </a>
    </div>          
</nav>
  )
}

export default Nav