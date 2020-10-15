import React from 'react';
import logo from './images/gta_logo.png';
import lv from './images/lv.png';
import Router from './components/Router';
import ru from './images/ru.png';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
   
          <div className="wrapper">
              <header>
                  
                  <ul className="nav-bar">



                  <NavLink to="/"><li><a ><img className="logo" src={logo} alt=""/></a></li></NavLink>



                      <div className="dropdown">
                          <button className="dropbtn">GTA versijas 
                            <i className="fa fa-caret-down"></i>
                          </button>
                      
                                  <div className="dropdown-content">
                                  
                                      <li><a to="GTA.html">GTA</a></li>
                                      <li><a to="GTA2.html">GTA 2</a></li>
                                      <li><a to="GTA3.html">GTA III</a></li>
                                      <li><a to="GTA_Vice_City.html">GTA: Vice City</a></li>
                                      <li><a to="GTASanAndreas.html">GTA: San Andreas</a></li>
                                      <li><a to="GTA4.html">GTA IV</a></li>
                                      <li><a to="GTA5.html">GTA V</a></li>
                                      
                                  </div>
                        </div> 
                        <li><a >Gallery</a></li>
                        <li><a to="about.html">Par</a></li>
                      <div className="languge">
                          <li><a href="#" ><img src={lv} alt=""/></a></li>
                          <li><a href="#" ><img src={ru} alt=""/></a></li>
                      </div>
                  </ul>
              </header>

              <Router />


             

          </div>


  );
}

export default App;
