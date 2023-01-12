import React from "react";
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Button, Col, Row } from 'react-bootstrap';
import items from '../About/Data';
import ReadMoreAndLess from 'react-read-more-less';
import Video from "../../../src/Videos/video.webm"
import MovingText from 'react-moving-text'
import { useNavigate } from "react-router-dom";
import "./Daily"
import "./About.css"


export default function Cardd(props) {

  const navigate = useNavigate();
  const goToDaily = () => {
    navigate("/Daily")
  };

  return (
    <>
      <Container >
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
              <Card.Body><br />
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
                  <MovingText className="h3"
                    type="effect3D"
                    duration="1100ms"
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

            {/* crad-2 timing */}
            <h2 className='tyming'>TEMPLE TIMINGS</h2>
            <Card>
              <Card.Img variant="top" src={items[1].img} className="img2" />
              <Card.Body>
                <Card.Title>{items[1].title}</Card.Title>
                <Card.Text className="text">   {items[1].text} </Card.Text>

                <Button className ="darshan_btn"variant="" onClick={() => goToDaily()}>{" "}Daily Darshan </Button>

              </Card.Body>
            </Card>

            {/* card-3 live arti */}
            <Card style={{ height:"45%" }}>
              <video width="auto" height="auto" controls alt="contatUsImg">
                <source src={Video} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>{items[2].title}</Card.Title>
                <Card.Text className="text"> {items[2].text} </Card.Text>
                <Button className="arti_btn"variant="" onClick={() => goToDaily()}>{" "}Live Arti</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

    </>
  )
}























