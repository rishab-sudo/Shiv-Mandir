import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import home2 from "../../Images/Hnew.jpg"
import "./Home.css"


const Crousel = () => {
  return (
    <div id="carouselExampleCaptions" className="donatecarousel" data-bs-ride="carousel" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={home2} className="d-block crouselImg img-fluid" alt={home2}/>
        <div class="carousel-caption d-none d-md-block">
        <div className="btn_div">
           <button style={{borderRadius:"15px",height:"50px",width:"150px",border:"none",fontSize:"1.5rem",fontWeight:"bold",color:"white",backgroundColor:"brown"}}>Sponsor</button>
           </div>
          <h3>First slide label</h3>
          <h4 style={{color:"white"}}>Some representative placeholder content for the first slide.</h4>
        </div>
      </div>
      <div class="carousel-item">
        <img src={home2} class="d-block crouselImg img-fluid"  alt={home2}  />
        <div class="carousel-caption d-none d-md-block">
        <div className="btn_div">
           <button style={{borderRadius:"15px",height:"50px",width:"150px",border:"none",fontSize:"1.5rem",fontWeight:"bold",color:"white",backgroundColor:"brown"}}>Sponsor</button>
           </div>
        <h3>First slide label</h3>
          <h4 style={{color:"white"}}>Some representative placeholder content for the first slide.</h4>
        </div>
      </div>
      <div class="carousel-item">
        <img src={home2} class="d-block crouselImg img-fluid"  alt={home2}  />
        <div class="carousel-caption d-none d-md-block">
        <div className='btn_div'>
           <button style={{borderRadius:"15px",height:"50px",width:"150px",border:"none",fontSize:"1.5rem",fontWeight:"bold",color:"white",backgroundColor:"brown"}}>Sponsor</button>
           </div>
        <h3>First slide label</h3>
          <h4 style={{color:"white"}}>Some representative placeholder content for the first slide.</h4>
        </div>
      </div>
    </div>
    <div>
     
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  )
}

export default Crousel
