import React from 'react'
import {Container} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { FaAngleDoubleRight } from "react-icons/fa"
import "./Donate.css"
const Header = () => {
  return (
    <>
      <header className="top_header">
    <Container>
        <div style={{display:"flex"}}>
     <h2  className='top_header_heading'>Donate -</h2>
     <FaAngleDoubleRight className='arrow_icon'/>
     </div>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:"-45px"}}>
          <FaShoppingCart className="cartIcon" />
          <p style={{ color: "white", fontSize: "1.2rem",}}>Seva Cart</p>
        </div>
      </Container>
      </header>
    
    </>
  )
}

export default Header
