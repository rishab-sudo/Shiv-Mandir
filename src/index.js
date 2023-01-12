import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css"
 import {BrowserRouter as Router ,Routes,Route }  from "react-router-dom";
 import "./index.css"
//  import {provider} from "react-redux"
//  import  store from "./store"
//  const container =document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />)




 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

    <App />
   
  </Router>
);


document.getElementById("root")