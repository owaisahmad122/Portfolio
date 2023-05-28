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

//console.log(Ssdata);

const App = (val) => {
  console.log(val)
  {const ndata =Sdata.map((val) => {
    return  <About image={val.image} description={val.description}/>

  }) }
  return (
    <>
      <Nav/>
      <Header/>  
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
