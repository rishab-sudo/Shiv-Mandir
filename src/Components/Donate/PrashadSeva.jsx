import React from 'react'
import Header from "./Header"
import "./Donate.css"
import SubHeader from "../../SubHeader"
import Cards from "../Cards/Cards"
import CardData from "../Cards/CardData"
import {Container,Row,Col} from "react-bootstrap"

const Prashad = () => {
  return (
    <>
       <div className='Prashad_header' style={{marginTop:"4rem"}}>
    <Header/>
    </div>
    <div>
      <SubHeader/>
    </div>
    <Container className='main_container'>
  <Row> 
    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <div className="patron_card1_img" style={{width: "18.5rem"}}>
  <img src={require("../../Images/prashadSeva.jpg")} class="card-img-top" alt="..." id="cardImg" style={{height:"28rem",}}/>
  </div>
    </Col>
   
    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[6].img} title={CardData[6].title} text={CardData[6].text} btn={CardData[6].btn}  />
    </Col>

    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[7].img} title={CardData[7].title} text={CardData[7].text} btn={CardData[7].btn}  />
    </Col>
   
    <Col lg={3} md={3} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[7].img} title={CardData[8].title} text={CardData[8].text} btn={CardData[8].btn}  />
    </Col>
  </Row>
</Container>

 
    </>
  )
}

export default Prashad
