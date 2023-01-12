import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Video from "../../../src/Videos/video.webm"
import Iconn from "./iconn"
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j2btiyq",
        "template_7rn6onb",
        form.current,
        "yTENAXa-3HYEajU5K"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <>
      <section className="contactus" id="Contact">
        <h2 id="mainheading">Get In Touch With Us..</h2>
        <div id="underline">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-11 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-6">
                  <h1 className="main-heading">
                    Connect With <br /> Our <br />Managment Team.
                  </h1>
                  <p className="main-hero-para">
                    Chair-Men Mr.Virendra Kumar Dixit, With forteen other members.
                  </p>
                  <p className="icons">
                    <Iconn></Iconn>
                  </p>

                  <video controls alt="contatUsImg"
                    className="img-fluid video" >

                    <source src={Video}  type="video/mp4" />
                  </video>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-6">
                  <form ref={form} onSubmit={sendEmail} className="row-lg-auto g-3 align-items-center" id="form">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        {/* <form ref={form} onSubmit={sendEmail} className="row-lg-auto g-3 align-items-center" id="form"> */}
                        <label for="name"> First Name</label>
                        <input
                          type="name"
                          name="firstname"
                          className="form-control"
                          id="firstname"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-feild">
                        <label for="name">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastname"
                          className="form-control"
                          placeholder="Last Name"

                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <label for="phon">Phon No</label>
                        <input
                          type="number"
                          name="phone"
                          id="phon"
                          className="form-control"
                          placeholder="Phone Number "

                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <label for="email">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <label for="subject">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Enter email subject"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <label for="Message">Message/Suggestion</label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Message"
                          id="message"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100" id="submit">
                      Submit
                    </button>

                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;





















        //  {/* <!-- contact form --> */}
//          <div className="col-md-4">
//          <form ref={form} onSubmit={sendEmail} className="row-lg-auto g-3 align-items-center" id="form">
//            <div className="form-group">
//              <label for="name">Name</label>
//              <input
//                type="name"
//                name="name"
//                className="form-control"
//                id="name"
//                placeholder="enter your name"
//              />
//            </div>

//            {/* <!-- email --> */}
//            <div className="form-group">
//              <label for="email">Email address</label>
//              <input
//                type="email"
//                name="email"
//                className="form-control"
//                id="email"
//                placeholder="enter your email"
//              />
//            </div>

//            {/* <!-- subject --> */}
//            <div className="form-group">
//              <label for="subject">Subject</label>
//              <input
//                type="text"
//                name="subject"
//                className="form-control"
//                id="subject"
//                placeholder="enter email subject"
//              />
//            </div>

//            <div className="form-group">
//              <label for="Message">Message</label>
//              <textarea
//                type="text"
//                className="form-control"
//                id="Message"
//                rows="5"
//              ></textarea>
//            </div>

//            <button type="submit" className="btn btn-primary">
//              Submit
//            </button>
//          </form>
//          </div>
//          </div>
//          </div>
//          </>
//  );
// // }

// // export default App;

