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
          <img src={EcommerceImage} height="450px" width="600px" alt="profile" />
          <a href="#github" className="project-details">
            <h3>E-Commerce Project using NodeJs</h3>
            <hr></hr>
            <p>Development | Nodejs | MySQL | JWT</p>
          </a>
        </div>

        <div className="project">
          <img src={ElearningImage} height="450px" width="600px" alt="" />
        </div>

        <div className="project">
         <img src={BreakoutImage} height="450px" width="600px" alt="" />
        </div>

        <div className="project">
         <img src={TodoImage} height="450px" width="600px" alt="" />
        </div>
      </div>
    );
  }
}
