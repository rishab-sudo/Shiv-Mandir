import React from 'react'
import {Container} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { FaAngleDoubleRight } from "react-icons/fa"
import "./Donate.css"
const Header = () => {
  return (
    <>
      <header className="top_header">
    <Container fluid>
      <div className='header_main_div'>
    <div>
     <h2  className='top_header_heading'>Donate -
     <FaAngleDoubleRight className='arrow_icon'/>
     </h2>
     </div>
        <p className='top_header_subHeading'>
          Welcome to the Shri Mandir donation page. 
         </p>
        <div style={{display:"flex"}}>
          <FaShoppingCart className="cartIcon" />
          <p className='cart_text'>Seva Cart</p>
        </div>
        </div>
      </Container>
      </header>
    
    </>
  )
}

export default Header
