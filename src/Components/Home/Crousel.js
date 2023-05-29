import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"


const Crousel = () => {
  const navigate = useNavigate();
  const goToDonate = () => {
    navigate("/Donate")
  };
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500} style={{ width: "100%" }}>
          <img
            className="d-block w-100 img-fluid crouselImg"
            src={require("../../Images/TempleHome.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="sponsor_Btn" onClick={goToDonate}>Sponsor</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img-fluid  crouselImg"
            src={require("../../Images/TempleHome.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="sponsor_Btn" onClick={goToDonate}>Sponsor</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid  crouselImg"
            src={require("../../Images/TempleHome.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="sponsor_Btn" onClick={goToDonate}>Sponsor</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>

  )
}

export default Crousel
