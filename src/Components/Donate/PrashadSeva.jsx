import React from 'react'
import water from "../../Images/water.jpg"
import mandirDeco from "../../Images/mandirDeco.jpg"
import ShriRamTempleBrick from "../../Images/ShriRamTempleBrick.jpg"
import prashadSeva from "../../Images/prashadSeva.jpg"
import Bhog from "../../Images/56Bhog.jpg"
import tulsiArchana from "../../Images/tulsiArchana.jpg"
import Header from "./Header"
import "./Donate.css"
import SubHeader from "../../SubHeader"

const Prashad = () => {
  return (
    <>
       <div className='Prashad_header' style={{marginTop:"4rem"}}>
    <Header/>
    </div>
    <div>
      <SubHeader/>
    </div>
 <div className="Prashad_Donation_container" style={{marginTop:"5rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
   <div className="row align-items-center">
   
   <div class="col">
    <div className="card-1st" style={{width: "18rem",marginTop:"-3.5rem",marginBottom:"6rem",}}>
  <img src={prashadSeva} class="card-img-top" alt="..." id="cardImg" style={{height:"28rem"}}/>
  </div>
    </div>

    <div className="col">
    <div className="card" style={{width: "17rem",marginTop:"-3.5rem",marginBottom:"6rem"}}>
  <img src={prashadSeva} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Rajbhog Seva</h5>
    <p className="card-text">Includes Temple Construction related work & Maintinance & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>

    <div className="col">
    <div className="card" style={{width: "17rem",marginTop:"-3.5rem",marginBottom:"6rem"}}>
  <img src={Bhog} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">56 bhog Seva</h5>
    <p className="card-text">Includes the, Proper Water Supply in the Temple & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>

    <div className="col">
    <div className="card" style={{width: "17rem",marginTop:"-3.5rem",marginBottom:"6rem"}}>
  <img src={tulsiArchana} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Shri Tulasi Archana Seva</h5>
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

export default Prashad
