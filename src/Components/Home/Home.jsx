import React from "react"
import "../Home/Crousel"
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Crousel from "../Home/Crousel";
import "./Home.css"
import About from "../../Components/About/About"
import Event from "../../Components/Event/Event"
import Contact from "../../Components/Contact/Contact"
import Login from "../../Components/Login/Login"
import Footer from "../../Components/Footer/Footer"
import Donate from "../../Components/Donate/Donate"

const Home = (props) => {
  return (
    <>
      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
      <section id="Home">
        <Container>
          <Row>
            <Link to="/Donate">
              <Crousel/>   
            </Link>
          </Row>
        </Container>

      </section>

      <About />
      <Event />
      <Contact />
      <Login />
      <Donate/>
      <Footer />
    
    </>
  )
}
export default Home







