import React from 'react'
import water from "../../Images/water.jpg"
import mandirDeco from "../../Images/mandirDeco.jpg"
import Arti from "../../Images/Arti.jpg"
import img1 from "../../Images/img1.jpg"
import ShriRamTempleBrick from "../../Images/ShriRamTempleBrick.jpg"
import Header from "./Header"
import "./Donate.css"
import SubHeader from "../../SubHeader"
const General = () => {
  return (
    <>
     <div className='General_header' style={{marginTop:"4rem"}}>
    <Header/>
    </div>
    <div className="">
    <SubHeader/>
     </div>
    
     <div class="container">
  <div class="row">
    <div class="col">
    <div className="card-1" style={{width: "17rem"}}>
  <img src={img1} class="card-img-top" alt="..." id="cardImg" style={{height:"28rem"}}/>
  </div>
    </div>
   
    <div class="col">
    <div className="card" style={{width: "17rem"}}>
  <img src={Arti} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Temple Arti Seva</h5>
    <p className="card-text">Includes Temple Construction, Renovation related work & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>
   
    <div class="col">
    <div className="card" style={{width: "17rem"}}>
  <img src={img1} class="card-img-top" alt="..." id="cardImg"/>
  <div className="card-body">
    <h5 className="card-title">Shringar Seva</h5>
    <p className="card-text">Includes the, Proper Water Supply in the Temple & Maintinance.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"#ad4956"}}>view Seva</a>
  </div>
</div>
    </div>
  </div>
</div>



  
    </>
  )
}

export default General
