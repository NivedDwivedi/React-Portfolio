import React, { Component } from "react";
import Educationbg from "../images/educationbg.jpg"

export default class Education extends Component {
    render() {
      return (
        <div className="education-wrap">
            <div className="education">
                <img src={Educationbg} alt="education"/>
                <div className="education-text">My Education</div>
            </div>
        <div className="education">
            <div className="course">
			    <h1>B.TECH (IT)</h1>
			    <h2>KIET Group of Institution</h2>
			    <h3>Precentage: 82.01%  </h3>
		    </div>
            <hr></hr>
		    <div className="course">
			    <h1>Intermediate</h1>
			    <h2>S.D. Inter College</h2>
			    <h3>Precentage: 88.6%</h3>
		    </div>
            <hr></hr>
		    <div className="course">
			    <h1>High School</h1>
			    <h2>S.D. Inter College</h2>
			    <h3>Precentage: 86.6%</h3>
		    </div>
        </div>
	    </div>
      );
    }
  }