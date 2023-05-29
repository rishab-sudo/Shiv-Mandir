import React from 'react';
// import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMoreAndLess from 'react-read-more-less';
import "./Event.css"
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "../Modal/Modal"



function Menu({ items }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem;
        return <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo' />

          <div className='item-info'>
            <header>
              <h6>{title}</h6>
              {/* <h4 className='price'>Rs.{price}</h4> */}
            </header>
            <p className='text'>
              <ReadMoreAndLess
                // ref={this.ReadMore}
                className="read-more-content"
                charLimit={100}
                readMoreText="Read more"
                readLessText="Read less" >
                {desc}
              </ReadMoreAndLess>
            </p>

            <Button variant="primary" id='sponsorbtn' onClick={() => setModalShow(true)}>
              Sponsor
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </div>
        </article>




      })}

    </div>
  )
}

export default Menu;