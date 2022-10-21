import React from "react";
import './App.css';
import { Navbar, Welcome, About, Projects, Team, Contact, Donate, Merchandise } from "./components/index";
import {Route, Routes, Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" component={Navbar}></Route>
        </Routes>
      </Router>
      <Welcome/>
      <About/>
      <Projects/>
      <Team/>
      <Contact/>
      <Donate/>
      <Merchandise/> 
    </div>
  );
}

export default App;
