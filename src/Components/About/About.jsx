import React, { useState, props } from 'react';
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import ReadMoreAndLess from 'react-read-more-less';
import MovingText from 'react-moving-text'
import items from '../About/Data';
import Cards from "../Cards/Cards"
import CardData from "../Cards/CardData" 
import "./About.css"


function About(props) {

  return (
    <>
      <section id="About">
      <Container fluid className='g-5' >
        <Row>
          <Col lg={9} md={12} xs={12}>
            {/* Card 1 about */}
            <Card className='leftcard'>
              <Card.Header as="h2">{items[0].Header}</Card.Header>
              <MovingText className="MainText"
                type="effect3D"
                duration="1100ms"
                delay="8s"
                direction="alternate"
                timing="ease"
                iteration="infinite"
                fillMode="none">
                Shiv Mandir
              </MovingText>
              <Card.Text className="text">
                {items[0].text}
              </Card.Text>
              <Card.Img variant="top" src={items[0].img} className="img1" />
              <Card.Body>
                <Card.Text className="text">
                  <ReadMoreAndLess
                    className="read-more-content"
                    id="read"
                    charLimit={500}
                    readMoreText="Read more"
                    readLessText="Read less" >
                    {items[0].text}
                  </ReadMoreAndLess>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={12} xs={12}>

            <Container className="icon">
              <Card >
                <Card.Body className="social_container">
                  <MovingText className=" social_container_head"
                    type="glow"
                    duration="2000ms"
                    delay="5s"
                    iteration="infinite"
                    fillMode="none">
                    Follow Us
                  </MovingText>

                  <a href="https://www.youtube.com"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>

                  <a href="https://about.facebook.com/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>

                  <a href="https://twitter.com/i/flow/login" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>

                  <a href="https://www.instagram.com/?hl=en"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>

                  <a href="https://web.whatsapp.com/"
                    className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </a>

                  <a href="https://web.whatsapp.com/"
                    className="email-social">
                    <FontAwesomeIcon icon={""} />

                  </a>
                </Card.Body>
              </Card>
            </Container>

<Cards img={CardData[1].img}  title={CardData[0].title} text={CardData[0].text} btn={CardData[0].btn}/>
<Cards img={CardData[1].img}  title={CardData[1].title} text={CardData[1].text} btn={CardData[1].btn}/>
          </Col>
        </Row>
      </Container>
      </section>
    </>

  )
}
export default About;









