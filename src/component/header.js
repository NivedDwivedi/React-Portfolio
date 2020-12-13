import React, { Component } from "react";
import Profile from "../images/avataaars.svg";


// const ulStyle={
//     text-decoration:none;
// }

export default class Header extends Component {
  render() {
    return (
      <div className="header" id="home">


        <div className="navbar">
          <ul>
            <li><a href="#home" id="headerlink">Home</a></li>
            <li><a href="#project-div"  id="headerlink">Project</a></li>
            <li><a href="https://drive.google.com/file/d/11rf9HetMcduJNJk5EockOGQyl_dJtL3h/view?usp=sharing"  id="headerlink" targer="_blank">Resume</a></li>
            <li><a href="#contact-div"  id="headerlink">Contact</a></li>
          </ul>
        </div>


        <div className="profile">
          <img src={Profile} alt="avataar"/>
          <h1>Nived Dwivedi</h1>
          <p>Hello, I am Nived Dwivedi. I am pursuing  B.Tech from KIET Group of Institutions, Ghaziabad. Currently working on 
            ReactJs also worked on JavaScript, NodeJs, ExpressJs etc.
          </p>
          <hr />
        </div>



        <div className="sociallinks">
        
          <a href="https://linkedin.com/in/NivedDwivedi" id="headerlink2" target="_blank"  rel="noreferrer"><i className="fa fa-linkedin-square linkedin" ></i></a>
          <a href="https://github.com/NivedDWivedi" id="headerlink3" target="_blank"  rel="noreferrer"><i className="fa fa-github github"></i></a>
        
        </div>


      </div>
    );
  }
}
