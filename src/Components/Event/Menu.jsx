import React from 'react';
// import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMoreAndLess from 'react-read-more-less';

import MovingText from 'react-moving-text'
import "./Event.css"



function Menu({ items }) {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
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

            <button type='button' id='sponsorbtn'>
              <MovingText
                type="glowing"
                duration="8s"
                delay="1s"
                iteration="infinite"
                fillMode="none">
                Sponsor
              </MovingText>
            </button>

          </div>
        </article>


      })}

    </div>
  )
}

export default Menu;