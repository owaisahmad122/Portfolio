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

const Ssdata = {
1: About, 
2: Services,
3: Services,
3: Services 


}
return(
Sdata.map((val,index)=>{

  <>
const components =Ssdata[val.id];
 <components key={val.id}  data={val}>
  
 </components>   
 </>
// );
}) 
)


//console.log();
const App = () =>{
  
 //{//console.log(Ssdata);}
  return (
    <>
      <Nav/>
      <Header/> 
    
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
