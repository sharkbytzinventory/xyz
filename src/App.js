import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Header from './components/Header'
import Form from "./components/Form";

const App = () => {
  return (
    <>
     <Form/>

    {/* <Header/>
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/service" element={<Service />}/>
      </Routes>
    </Router> */}
    </>
  );
};

export default App;
