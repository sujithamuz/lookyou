import React from "react";
import logo from '../images/logo.svg'
function Homepage() {
  return (
    <div>
      <div className="navbar">
        <ul className="list-inline">
          <li className="list-inline-item">suji</li>
          <li className="list-inline-item">
            <img src={logo}/>
          </li>
          <li className="list-inline-item">suji</li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
