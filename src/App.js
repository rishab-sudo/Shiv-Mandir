import React , { useEffect, useState }from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Daily from "./Components/About/Daily"
import Donate from "./Components/Donate/Donate"
import Event from "./Components/Event/Event";
import Contact from "./Components/Contact/Contact"
import Navbar from "./Components/Navbar/Navbar";
import Login from "../src/Components/Login/Login"
import Signup from "./Components/Login/Signup"
import Patron from "./Components/Donate/Patron"
import General from "./Components/Donate/General"
import FestivalDonation from "./Components/Donate/FestivalDonation"
import PrashadSeva from "./Components/Donate/PrashadSeva.jsx"
import ArtiSeva from "./Components/Donate/ArtiSeva"
import {  Routes, Route} from "react-router-dom"
import { auth } from "./firebase";



export default function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>
    
        <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
            <Route path="Daily" element={<Daily/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/Donate" element={<Donate/>}/>
          <Route path="/Patron" element={<Patron/>}/>
          <Route path="/General" element={<General/>}/>
          <Route path="/FestivalDonation" element={<FestivalDonation/>}/>
          <Route path="/PrashadSeva" element={<PrashadSeva/>}/>
          <Route path="/ArtiSeva" element={<ArtiSeva/>}/>
        </Routes>

    </>
  );
}

   
        

      
     
   
      
 
   
     
    
 

    
     
     
 
     
     

         
  
 