import React, { useState } from 'react';
import {
    FaPiedPiperPp,
    FaBars,
    FaGift,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Donate.css"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Patron",
            name:"Become a Life patron",
            icon:<FaGift/>
        },
        {
            path:"/General",
            name:"General Seva",
            icon:<FaGift/>
        },
        {
            path:"/FestivalDonation",
            name:"Festival Seva",
            icon:<FaGift/>
        },
        {
            path:"/PrashadSeva",
            name:"Prashad/Bhog Seva",
            icon:<FaGift/>
        },
        {
            path:"/GoSeva",
            name:"Go Seva",
            icon:<FaGift/>
        },
      
      
    
    ]
    return (
        <div className="container" id="containerr">
           <div style={{width: "250px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display:"block" }} className="logo"></h1>
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="activee" id="active">
                           <div className="iconn">{item.icon}</div>
                           <div style={{display:"block" }} className="link_textt">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;