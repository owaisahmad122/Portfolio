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
import Sdata from './components/Sdata';




//console.log();
const App = () =>{
  
  const MapComponent = {
    1: About, 
    2: Services,
    3: Services,
    4: Services 
    }
 
  return (
    <>
      <Nav/>
      <Header/> 
      <div>
        {
        Sdata.map(val=>{
    const Components = MapComponent[val.id];
    {console.log(Components);}
    return
     <components key={val.id}  data={val}/> ;
     }) } 
     </div>
      <Services />
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
