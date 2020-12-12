import React, { Component } from "react";
import EcommerceImage from "../images/ecommerce.png";
import ElearningImage from "../images/elearning.jpg";
import BreakoutImage from "../images/2d-breakout.png";
import TodoImage from "../images/Todo.png";


export default class Project extends Component {
  render() {
    return (
      <div className="project-div">
        
        <div className="project">
          
          <div class="container">
            <img src={EcommerceImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
              <p>Development | NodeJS | MySQL</p>
                <button><a href="#github" target="_blank"  id="githublinks">GitHub</a></button>
              </div>
            </div>
          </div>
       </div>

        <div className="project">
        <div class="container">
            <img src={ElearningImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
                <p>Development | NodeJS | MySQL</p>
                <button><a href="#github" target="_blank"  id="githublinks">GitHub</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
        <div class="container">
            <img src={BreakoutImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
              <p>Development | JavaScript </p>
              <p>HTML | CSS </p>
                <button><a href="#github" target="_blank"  id="githublinks">Play Now!</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
        <div class="container">
            <img src={TodoImage} alt="Avatar" class="image" height="350px" width="500px" />
            <div class="overlay">
              <div class="text">
              <p>Development | JavaScript </p>
              <p>HTML | CSS </p>
                <button><a href="#github" target="_blank" id="githublinks">Make a List</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
