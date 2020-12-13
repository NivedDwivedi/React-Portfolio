import React, { Component } from "react";
import EcommerceImage from "../images/ecommerce.png";
import ElearningImage from "../images/elearning.jpg";
import BreakoutImage from "../images/2d-breakout.png";
import TodoImage from "../images/Todo.png";


export default class Project extends Component {
  render() {
    return (
      <div className="project-div-wrap" id="project-div">
        
        <div className="project">
          
          <div class="container">
            <img src={EcommerceImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
                <h2>Back-End API for E-Commerce Website</h2>
                <p>Tech used: NodeJS | MySQL | JWT </p>
                <a href="https://github.com/NivedDwivedi/E-commerce/tree/temp-ecommerce" target="_blank"  id="projectlinks" rel="noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
       </div>

        <div className="project">
        <div class="container">
            <img src={ElearningImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
                <h2>Back-End API for Student E-Learning Website</h2>
                <p>Tech used: NodeJS | MySQL | JWT </p>
                <a href="https://github.com/NivedDwivedi/crud-orm" target="_blank"  id="projectlinks" rel="noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
        <div class="container">
            <img src={BreakoutImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
                <h2>2d Breakout Game</h2>
                <p>Tech used: HTML | CSS | JavaScript </p>
                <a href="https://niveddwivedi.github.io/2D%20BreakOut%20Game/" target="_blank"  id="projectlinks" rel="noreferrer">Play Now !</a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
        <div class="container">
            <img src={TodoImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
                <h2>ToDo List</h2>
                <p>Tech used: HTML | CSS | JavaScript </p>
                <a href="http://niveddwivedi.github.io/ToDo/index.html" target="_blank" id="projectlinks" rel="noreferrer">Make a List</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
