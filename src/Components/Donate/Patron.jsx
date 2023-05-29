import React from 'react'
import Header from "./Header"
import "./Donate.css"
import SubHeader from "../../SubHeader"
import {Container,Row,Col} from "react-bootstrap"
import Cards from "../Cards/Cards"
import CardData from "../Cards/CardData"
function Patron() {
  return (
    <>
    <div className='Patron_header' style={{marginTop:"5rem"}}>
    <Header/>
    </div>
    <div>
      <SubHeader/>
    </div>
    <Container className='main_container'>
  <Row>
  <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <div className="patron_card1_img" style={{width: "17.5rem"}}>
  <img src={require("../../Images/ShriRamTempleBrick.jpg")} class="card-img-top" alt="..." id="cardImg" style={{height:"28.5rem"}}/>
  </div>
    </Col>
   
    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[5].img} title={CardData[5].title} text={CardData[5].text} btn={CardData[5].btn}  />
    </Col>

    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[5].img} title={CardData[5].title} text={CardData[5].text} btn={CardData[5].btn}  />
    </Col>
   
    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[5].img} title={CardData[5].title} text={CardData[5].text} btn={CardData[5].btn}  />
    </Col>
  </Row>
</Container>


   


   




      
   </>
  )
}

export default Patron
