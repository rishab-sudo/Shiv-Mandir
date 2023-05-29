import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Cards from "../Cards/Cards"
import CardData from "../Cards/CardData"
import img1 from "../../Images/img1.jpg"
import Header from "./Header"
import "./Donate.css"
import SubHeader from "../../SubHeader"
const General = () => {
  return (
    <>
     <div className='General_header' style={{marginTop:"4rem"}}>
    <Header/>
    </div>
    <div className="">
    <SubHeader/>
     </div>
    
     <Container className='main_container'>
  <Row>
  <Col lg={4} md={4} sm={12} className='donate_subpage_cols'>
    <div className="patron_card1_img" style={{width: "17.5rem"}}>
  <img src={img1} class="card-img-top" alt="..." id="cardImg" style={{height:"28.5rem"}}/>
  </div>
    </Col>
   
    <Col lg={4} md={4} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[4].img} title={CardData[4].title} text={CardData[4].text} btn={CardData[4].btn}  />
    </Col>
   
    <Col lg={4} md={4} sm={12} className='donate_subpage_cols'>
    <Cards img={CardData[4].img} title={CardData[4].title} text={CardData[4].text} btn={CardData[4].btn}  />
    </Col>
  </Row>
</Container>



  
    </>
  )
}

export default General
