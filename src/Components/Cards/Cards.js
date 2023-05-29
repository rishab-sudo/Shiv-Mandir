import React from 'react'
import { Card,Button, } from 'react-bootstrap';
import "./Cards.css"

const Cards = (props) => {

  return (
    <Card style={{marginBottom:"12px",maxWidth:"18.5rem"}}>
    <img src={props.img} className='img-fluid' />
    <Card.Body>
      <Card.Title >{props.title}</Card.Title>
      <Card.Text className="card_text">   {props.text} </Card.Text>

      <Button  className ="Card_btn"variant="" onClick={props.onClick}>{props.btn} </Button>
      

    </Card.Body>
  </Card>
  )
}

export default Cards