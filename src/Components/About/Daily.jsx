import React from 'react'
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import img from "../../../src/Images/Somnath-Temple.jpg"
import img1 from "../../../src/Images/img1.jpg"
import img2 from "../../../src/Images/img2.jpg"
import img3 from "../../../src/Images/img3.jpg"
import img4 from "../../../src/Images/img4.jpg"
import img5 from "../../../src/Images/img5.jpg"
import { useNavigate } from "react-router-dom";
import MovingText from 'react-moving-text'
import {BsArrowLeftSquare}from "react-icons/bs";
import SubHeader from '../../SubHeader';
import "./About.css"


const Daily = () => {
  
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/")
  };
  const navi = useNavigate();
  const gotodonate = () => {
    navi("/Donate")
  };
  return (
    <>
      {/* <Button id="B-btn"variant="dark" onClick={()=>goToAbout()}>Back</Button> */}
      <Container className="Daily">
          
       <div style={{marginTop:"2rem"}}>

          <SubHeader />
       </div>
        
        <Row>
          {/* for upwords images */}
          <Col lg={9} sm={12} style={{display:"grid",justifyContent:'center',alignItems:"center"}}>
            <Figure>
              <Figure.Image className='img-fluid daily_img'
                alt="171x180"
                src={img}
              />
              <div>
               <Button className='daily_artibtn' onClick={gotodonate}>ARTI-SEVA</Button>
              
              <Figure.Caption className='daily_caption '>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
             </Figure.Caption>
             
            </div>
            </Figure>
          </Col>

          <Col lg={3}sm={12}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={img1}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
              
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={img1}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>

              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={img2}
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
         
        </Row>

        {/* for downwards images */}
        <Row>
          <Col lg={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={img3}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>

          <Col lg={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={img4}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={img5}
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Daily
