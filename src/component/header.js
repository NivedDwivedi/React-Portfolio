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
              <a href="#home" id="headerlink">Home</a>
            </li>
            <li>
              <a href="#About"  id="headerlink">About</a>
            </li>
            <li>
              <a href="#Resume"  id="headerlink">Resume</a>
            </li>
            <li>
              <a href="#Contact"  id="headerlink">Contact</a>
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
              <a href="https://linkedin.com/in/NivedDwivedi" id="headerlink">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/NivedDWivedi" id="headerlink">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com" id="headerlink">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
