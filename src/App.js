import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login,Register,Reset,Home} from './components/index'








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
