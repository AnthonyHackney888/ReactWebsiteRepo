import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './Pages/HomePage/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './Components';
import Scroll from './Components/Scroll';
//<Route path='/Contact' element={<Contact />}/>
//Holding off on the contact from until fully implemented
//will take work and a bit tricky
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scroll/>
      <Navbar />
      <Routes>
        <Route path='/ReactWebsiteRepo' exact element={<Home/>} />
        
        <Route path='/About' element={<About/>} />
      </Routes>      
      <Footer/>
    </Router>
  );
}

export default App;
