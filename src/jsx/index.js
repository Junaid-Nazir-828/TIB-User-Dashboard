import React, { useContext } from "react";

/// React router dom
import {  Routes, Route, Outlet  } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
//import Main from './layouts/Main';

import ScrollToTop from "./layouts/ScrollToTop";

/// Table
import CreateTable from "./components/tables/CreateTable/CreateTable";

import { ThemeContext } from "../context/ThemeContext";



const Markup = () => {

  const allroutes = [

    ///// table
    { url: 'table-create' , component : <CreateTable /> },	    
  ];  

  return (
    <>
        <Routes>            
            <Route  element={<MainLayout />} > 
                {allroutes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`${data.url}`}
                    element={data.component}
                  />
                ))}
            </Route>
        </Routes>
        <ScrollToTop />
        
    </>
  );
};


function MainLayout(){
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${ menuToggle ? "menu-toggle" : ""}`}>  
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
          <div className="container-fluid">
            <Outlet />                
          </div>
      </div>
      <Footer />
    </div>
  )

};

export default Markup;
