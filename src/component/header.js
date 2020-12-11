import React, { Component } from "react";
import Profile from "../images/avataaars.svg";

// const ulStyle={
//     text-decoration:none;
// }

export default class Header extends Component {
  render() {
    return (
      <div className="main">
        <div className="Navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Resume">Resume</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <img src={Profile} alt="avataar"/>
        <h1>Nived Dwivedi</h1>
        <h3>Engineering Student</h3>
        <hr />
        <div className="Sociallinks">
          <ul>
            <li>
              <a href="https://linkedin.com/in/NivedDwivedi">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/NivedDWivedi">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
