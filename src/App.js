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




//console.log();
const App = () =>{
  const Ssdata =Sdata.map((val)=> (
   //console.log(val)
    <div key={val.id}>
      {console.log(val.id)}
     <About description={val.description} image={val.image}/>, 
   
     <Services descriptions={val.descriptions} images={val.images} />
    </div>
   )
   ) 
 
  return (
    
    <>
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
