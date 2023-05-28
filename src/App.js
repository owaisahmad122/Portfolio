import './App.css';
import './components/port.css';

import Nav from './components/Nav.js'; 
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Hire from './components/Hire';
import Testmonial from './components/Testmonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sdata from './components/Sdata'


//const Ssdata =Sdata.map(val) 
const Ssdata = [
  {
      description:'A passionate Full Web Developer having experience of building web application with JavaScript/Reactjs/Nodejs/ Reduxjs and some other cool libraries and frameworks.I am still enthusiastically learning more programming languages, frameworks, or principles I can integrate into the coding web in my head.Besides coding, I love traveling and meeting new people, playing Cricket or any online game .',            
      image:'../assets/imgs/man.png'
  
  
  
  
  } 
]

//console.log(Sdata);
const App = () =>{
  return (
    <>
      <Nav/>
      <Header/> 
      <About description='A passionate Full Web Developer having experience of building web application with JavaScript/Reactjs/Nodejs/ Reduxjs and some other cool libraries and frameworks.I am still enthusiastically learning more programming languages, frameworks, or principles I can integrate into the coding web in my head.Besides coding, I love traveling and meeting new people, playing Cricket or any online game .'  image='C:\Users\Owais\OneDrive\Desktop\Own_project\portfolio\src\assets\imgs\man.png'/> 
      < Services/>
      <Portfolio/>
      <Price></Price>
      <Hire></Hire>
      <Testmonial/>
      <Blog/>
      <Contact/>
      <Footer/>  
    </>
   
  
  );
  }

export default App;
