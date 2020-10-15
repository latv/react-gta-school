import React from 'react';
import logo from './images/gta_logo.png';
import lv from './images/lv.png';
import ru from './images/ru.png';
import './App.css';

function App() {
  return (
   
          <div className="wrapper">
              <header>
                  
                  <ul className="nav-bar">



                      <li><a href="index.html"><img className="logo" src={logo} alt=""/></a></li>



                      <div className="dropdown">
                          <button className="dropbtn">GTA versijas 
                            <i className="fa fa-caret-down"></i>
                          </button>
                      
                                  <div className="dropdown-content">
                                  
                                      <li><a href="GTA.html">GTA</a></li>
                                      <li><a href="GTA2.html">GTA 2</a></li>
                                      <li><a href="GTA3.html">GTA III</a></li>
                                      <li><a href="GTA_Vice_City.html">GTA: Vice City</a></li>
                                      <li><a href="GTASanAndreas.html">GTA: San Andreas</a></li>
                                      <li><a href="GTA4.html">GTA IV</a></li>
                                      <li><a href="GTA5.html">GTA V</a></li>
                                      
                                  </div>
                        </div> 
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about.html">Par</a></li>
                      <div className="languge">
                          <li><a href="#" ><img src={lv} alt=""/></a></li>
                          <li><a href="#" ><img src={ru} alt=""/></a></li>
                      </div>
                  </ul>
              </header>

              


             

          </div>


  );
}

export default App;
