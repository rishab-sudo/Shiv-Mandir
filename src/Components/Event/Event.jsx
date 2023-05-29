import React, { useState } from 'react';
import MyVerticallyCenteredModal from "../Modal/Modal"
import Menu from './Menu';
import { Container, Row, Col } from "react-bootstrap"
import Categories from './Categories'
import items from "./Sdata"
import Cards from "../Cards/Cards"
import CardData from "../Cards/CardData"
import "./Event.css"


const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function Event() {
  const [modalShow, setModalShow] = React.useState(false);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu section" id="Event">
      <main >
        <div className="title">
          <h2 >Our Festivals...</h2>
          <div className="underline"></div>
        </div>
        <Container fluid>
          <Categories categories={categories} filterItems={filterItems} />
          <Row>
            <Col lg={8} md={6} xs={12} style={{ display: "grid", justifyContent: "start" }}>
              <Menu items={menuItems} />
            </Col>
            <Col lg={4} md={6} xs={12} style={{ display: "grid", justifyContent: "end" }}>
              <Cards img={CardData[2].img} title={CardData[2].title} text={CardData[2].text} btn={CardData[2].btn} onClick={() => setModalShow(true)} />
              <Cards img={CardData[2].img} title={CardData[2].title} text={CardData[2].text} btn={CardData[2].btn} onClick={() => setModalShow(true)} />
              <Cards img={CardData[2].img} title={CardData[2].title} text={CardData[2].text} btn={CardData[2].btn} onClick={() => setModalShow(true)} />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Container>


      </main>
    </section>

  );
}

export default Event;
