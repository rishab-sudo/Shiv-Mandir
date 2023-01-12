import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function iconn() {
  return (

    < div >
      <card>
        <a href="https://www.youtube.com"
          className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://about.facebook.com/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/i/flow/login" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/?hl=en"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://web.whatsapp.com/"
          className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </card>
    </div>

  )
}

