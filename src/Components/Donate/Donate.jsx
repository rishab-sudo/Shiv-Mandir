import React from 'react'
import {Row,Col,Container} from "react-bootstrap"
import Header from "./Header"
import "./Donate.css"
import Sidebar from './Sidebar'
import Patron from "./Patron"
import ShriRamTempleBrick from "../../Images/ShriRamTempleBrick.jpg"
import prashadSeva from "../../Images/prashadSeva.jpg"
import DoSeva from "../../Images/GoSeva.jpg"

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
      {/* donate-cards */}
      <Container >
      <Row>
     <Col lg={12} md={12} xs={'12'}>
      <div className='donate_card_div'>
    <div className='card' type="button" id="donate_card">
        <div className='card_text img-fluid' style={{backgroundImage: `url(${DoSeva})`,borderRadius:"50%",height:"75px",width:"75px",marginLeft:"auto",marginTop:"10px",}}>
          <p style={{marginLeft:"-190px",fontSize:"1.5rem",color:"white",marginTop:"20px"}}>Go Seva</p>
        </div>
      </div>
   
    
    
    <div className='card' type="button" id="donate_card">
        <div className='card_text' style={{backgroundImage: `url(${DoSeva})`,borderRadius:"50%",height:"75px",width:"75px",marginLeft:"auto",marginTop:"10px"}}>
          <p style={{marginLeft:"-190px",fontSize:"1.5rem",color:"white",marginTop:"20px"}}>Go Seva</p>
        </div>
      </div>
   
    
   
    <div className='card' type="button" id="donate_card">
        <div className='card_text' style={{backgroundImage: `url(${DoSeva})`,borderRadius:"50%",height:"75px",width:"75px",marginLeft:"auto",marginTop:"10px"}}>
          <p style={{marginLeft:"-190px",fontSize:"1.5rem",color:"white",marginTop:"20px"}}>Go Seva</p>
        </div>
      </div>
   
    

    <div className='card' type="button" id="donate_card">
        <div className='card_text' style={{backgroundImage: `url(${DoSeva})`,borderRadius:"50%",height:"75px",width:"75px",marginLeft:"auto",marginTop:"10px"}}>
          <p style={{marginLeft:"-190px",fontSize:"1.5rem",color:"white",marginTop:"20px"}}>Go Seva</p>
        </div>
      </div>
      </div>
    </Col>
    </Row>
</Container>
     

    </div>//mainid

)
}

export default Donate
        



     
    
          

    








