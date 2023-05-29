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
import Sdata from './components/Sdata.js';




//console.log();
const App = () =>{
  const Ssdata =Sdata.map((val)=> {
   //console.log(val)
   return( <div key={val.id}>
    <Services descriptions={val.description} images={val.image} />
    </div>
   )});
 
  return (
    
    <>
     {console.log(Ssdata)}
      <Nav/>
      <Header/> 
      {Ssdata}
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
