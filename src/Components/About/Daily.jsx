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
        <Button onClick={goToAbout} style={{ background: "White", width: "97%", border: "0px", marginTop: "2px",marginLeft:"15px" }}>
          <header className='donate-header'style={{display:"flex"}}>
            <BsArrowLeftSquare style={{paddingTop:"15px",marginLeft:"5px",height:"35px"}}/>
            <MovingText
            style={{textAlign:"",paddingLeft:"37%"}}
              type="flash"
              duration="11000ms"
              delay="5s"
              iteration="infinite"
              fillMode="none">
              TODAY'S DARSHAN
            </MovingText>

          </header>
        </Button>
        <Row>
          {/* for upwords images */}
          <Col sm={8}>
            <Figure>
              <Figure.Image id="img"
                width={171}
                height={150}
                alt="171x180"
                src={img}
              />
              <Figure.Caption>
                <h1 className="artitext">Live Artri</h1>

                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.


              </Figure.Caption>
            </Figure>
            <Button className='daily_artibtn' onClick={gotodonate}>ARTI-SEVA</Button>
          </Col>

          <Col sm={4}>
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

            <Col sm={12}>
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
          </Col>
        </Row>

        {/* for downwards images */}
        <Row>
          <Col sm>
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

          <Col sm>
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
          <Col sm>
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
