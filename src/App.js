import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,useParams  } from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Reset from "./components/Reset";
import Home from "./components/Home";







const App = () => {
  


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
