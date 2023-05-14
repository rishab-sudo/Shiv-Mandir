import React from 'react'
import { Card,Button, } from 'react-bootstrap';
import { useNavigate,Link } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate();
  const goToDaily = () => {
    navigate("/Daily")
  };
  return (
    <Card style={{marginBottom:"12px"}}>
    <img src={props.img} className="" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text className="text">   {props.text} </Card.Text>

      <Button className ="darshan_btn"variant="" onClick={() => goToDaily()}>{props.btn} </Button>
      

    </Card.Body>
  </Card>
  )
}

export default Cards