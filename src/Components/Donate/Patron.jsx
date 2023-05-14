import React from 'react'
import Header from "./Header"
import {Container} from "react-bootstrap"
import About1 from "../../Images/About1.jpg"
import shriRadhakrishna from "../../Images/shriRadhakrishna.jpg"
import water from "../../Images/water.jpg"
import mandirDeco from "../../Images/mandirDeco.jpg"
import ShriRamTempleBrick from "../../Images/ShriRamTempleBrick.jpg"
import "./Donate.css"
import SubHeader from "../../SubHeader"
function Patron() {
  return (
    <>
    <div className='Patron_header' style={{marginTop:"4rem"}}>
    <Header/>
    </div>
    <div>
      <SubHeader/>
    </div>
<div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
    <div className="row " style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

    <div className="col-3">
    <div className="card" style={{width: "17rem"}}>
  <img src={shriRadhakrishna} class="card-img-top" alt="..." id="cardImg" style={{height:"28rem"}}/>
  </div>
    </div>

    <div className="col-3">
    <div className="card" style={{width: "17rem",marginLeft:"20px"}}>
  <img src={ShriRamTempleBrick} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Temple Renovation Seva</h5>
    <p className="card-text">Includes Temple Construction, Renovation related work & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>

    <div className="col-3">
    <div className="card" style={{width: "17rem",marginLeft:"20px"}}>
  <img src={water} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Temple Renovation Seva</h5>
    <p className="card-text">Includes the, Proper Water Supply in the Temple & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>

    <div className="col-3">
    <div className="card" style={{width: "17rem",marginLeft:"20px"}}>
  <img src={mandirDeco} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Temple Renovation Seva</h5>
    <p className="card-text">Includes the, Proper Power Supply in the Temple & Maintinance. </p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>

  </div>
    </div>


   




      
   </>
  )
}

export default Patron
