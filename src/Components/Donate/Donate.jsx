import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Header from "./Header"
import "./Donate.css"
import Sidebar from './Sidebar'
import DoSeva from "../../Images/GoSeva.jpg"
import DharmaSeva from "../../Images/DharmaSeva.png"

const Donate = () => {

  return (
    <div id="Donate">
      <Header />

      <Container>
        <Row>
          <Col lg={'3'} md={'6'} xs={'2'} >
            <Sidebar />
          </Col>


          <Col lg={9} md={6} className="crousel_col">
            <div className="donate_crousel">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={DoSeva} class="d-block " alt="..." id="crousel_img" style={{ height: "" }} />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={DoSeva} class="d-block " alt="..." id="crousel_img" style={{ height: "" }} />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={DoSeva} class="d-block " alt="..." id="crousel_img" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
      <Container donate text>
        <p className='donate_text'>
      <span style={{fontWeight:"bold"}}> Your contribution can help us continue our mission of spreading the message of love, peace, and unity.</span><br/>
          Your donation will help us in various ways, such as providing meals to the needy, supporting education
          and healthcare initiatives, organizing cultural events, and maintaining the temple's infrastructure.<br/>
          We appreciate any amount of donation that you can contribute, as every bit helps us in our mission.
          You can make a one-time donation or become a regular donor by setting up a recurring donation.
          To make a donation, please fill out the form below with your details and the donation amount.
          You can make a payment using a credit card, debit card, or PayPal.<br/>
          Thank you for your generosity and support. May the blessings of the divine be with you always.
        </p>
      </Container>
      {/* donate-cards */}
      <Container >
        <Row>
          <Col lg={12} md={12} xs={'12'}>

            <div className='donate_card_div'>
              <div className='donate_card' type="button" id="">
                <p className='card_txt'>Dharma Seva</p>
                <img className="card_img" src={require("../../Images/DharmaSeva.png")} />
              </div>



              <div className='donate_card' type="button" id="">
                <p className='card_txt'>Dharma Seva</p>
                <img className="card_img" src={require("../../Images/DharmaSeva.png")} />
              </div>



              <div className='donate_card' type="button" id="">
                <p className='card_txt'>Dharma Seva</p>
                <img className="card_img" src={require("../../Images/DharmaSeva.png")} />
              </div>

              <div className='donate_card' type="button" id="">
                <p className='card_txt'>Dharma Seva</p>
                <img className="card_img" src={require("../../Images/DharmaSeva.png")} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     


    </div>//mainid

  )
}

export default Donate

















