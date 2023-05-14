import React from 'react';
import "./Footer.css"
import About1 from "../../Images/About1.jpg"
import { MDBFooter, MDBContainer, MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp, faLoctaion } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// footer from mbb5
export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>


        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        {/* <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section> */}

        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>location</h5>

              <iframe width="130" height="130" id="gmap_canvas"
                src="https://maps.google.com/maps?q=baheri%20shekhupur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </MDBCol>

            <MDBCol lg='4' md='4' className='mb-4 mb-md-0 ' >
              <h5 className='text-uppercase'>Quick Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#Home' className='text-white' id="quicklinks">
                    Home
                  </a>
                </li>
                <li>
                  <a href='#About' className='text-white' id="quicklinks">
                    About
                  </a>
                </li>
                <li>
                  <a href='#Event' className='text-white' id="quicklinks">
                    Events
                  </a>
                </li>
                <li>
                  <a href='#Donate' className='text-white' id="quicklinks">
                    Donate
                  </a>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='4' md='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact US</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a > Shiv Temple <br></br>
                    Holi Chauraha Road, Baheri,UP<br></br>
                    Pin-Code : 243201
                  </a>
                  <li>
                    <a>
                      Phone : 8899190405
                    </a>
                    <li>
                      <a>Email : connect@ShivMandir.org </a>
                    </li>
                  </li>
                </li>

              </ul>
            </MDBCol>

          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020-2023 Copyright:
        <a className='text-white' id="quicklinks" href='https://mdbootstrap.com/'>
          ShivMandir.com
        </a>
      </div>
    </MDBFooter>
  );
}