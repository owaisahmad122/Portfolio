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
//<Portfolio/>
//<Price></Price>
const App = () =>{
  console.log(Sdata.slice[1,3]);
  let SArr ;
   //Sarr=Sdata.slice[2:3]
  const MapComponent ={
    
  0:About,
  //1:Services,
 //2:Services,
  1:Services,
 6:Portfolio,
 9:Price

  };
  const Ssdata=Sdata.map((val ,index)=>{

   const MyComponent=MapComponent[index];
   // console.log(val.image);
    if
      (MyComponent){
  return <MyComponent key={val.id} ArrayData={val} />
    }
    else{
      return null;
    }
  })

  
  return (
    <>
      <Nav/>
      <Header/> 
      {Ssdata}
      <Hire></Hire>
      <Testmonial/>
      <Blog/>
      <Contact/>
      <Footer/>  
    </>
   
  
  );
  }

export default App;
