
import React from 'react';
// import './App.css';
// import HomePage from "./HomePage";
// import MenuBar from './MenuBar';
// import About from "./About";
// import Services from "./Services";
// import Contactus from "./Contactus";
// import { Route,Routes } from 'react-router-dom';
// import Search from './Search';
   import AllProducts from "./AllProducts.jsx";
function App() {
  return (
      <>
       {/* <MenuBar/>
       <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services"  element={<Services />}></Route>
        <Route path="/services/:web"  element={<Services />}></Route>
        <Route path="/contactus"  element={<Contactus />}></Route>
        <Route path="/search"  element={<Search />}></Route>
       </Routes> */}
       <AllProducts />

      </>
  );
}

export default App;
