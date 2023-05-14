import React from 'react'
import {Container} from "react-bootstrap"
import {FaArrowAltCircleLeft}from "react-icons/fa"
import "./App.css"

const SubHeader = () => {

  return (
    <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div  className="patron-SubHeader_div">
        <div className='bck_icon mt-1'>
        <FaArrowAltCircleLeft onClick={''}/>
        </div>
    <p className='mt-2'>
     Become a Life Time Patron
     </p>
        </div>

    </Container>
  )
}

export default SubHeader