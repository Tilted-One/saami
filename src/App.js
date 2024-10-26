import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import AboutUs from './page/AboutUs';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {

  const [cart, setCart] = React.useState()

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart}/>} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
