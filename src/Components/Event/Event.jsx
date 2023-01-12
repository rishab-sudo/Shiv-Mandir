import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories'
import items from "./Sdata"
import "./Event.css"


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Event() {
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
      <main id="Event">
        <div className="title">
          <h2 >Our Fastivals...</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={menuItems} />

      </main>
    </section>

  );
}

export default Event;
