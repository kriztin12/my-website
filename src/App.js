

//import { Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Projects from './components/projects';
import Sidebar from './components/sidebar';
import About from './components/about';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>

    </div>
  );
}

export default App;
