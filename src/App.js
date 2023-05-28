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


const Ssdata =Sdata.map() 

//console.log();
const App = () =>{

  console.log(Ssdata.description);
  return (
    <>
      <Nav/>
      <Header/> 
      <About description={Sdata.description} image='C:\Users\Owais\OneDrive\Desktop\Own_project\portfolio\src\assets\imgs\man.png'/> 
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
