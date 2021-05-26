import React, { useState } from "react";

const Burger = (props) => {
  const { closeBurger } = props;
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <h4>
            <a href="#" className="logo">
              Head.
            </a>
          </h4>
        </div>
        <ul closeBurger={() => setShow(false)} className="nav-links">
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div onClick={() => setShow(true)} className="burger">
          <a>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
