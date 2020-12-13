import React, { Component } from "react";


export default class Contact extends Component {
    render() {
      return (
        <div className="contact-wrap" id="contact-div">
            <div className="contact-text">Contact Me <hr></hr></div>
            <div className="contact-links">
                <div className="contact-options">
                    
                    <a href="https://github.com/NivedDWivedi" target="_blank" rel="noreferrer"><i className="fa fa-github github"></i></a>
                </div>
                <div className="contact-options">
                   
                    <a href="https://linkedin.com/in/NivedDwivedi" target="_blank"  rel="noreferrer"> <i className="fa fa-linkedin-square"></i></a>
                </div>
                <div className="contact-options">
                    <a href="mailto:nivedv99dwivedi@gmail.com"  rel="noreferrer"><i className="fa fa-envelope"></i></a>
                </div>
            </div>
            {/* <div className="footer-text">by Nived Dwivedi | Thank You !</div> */}
	    </div>

      );
    }
  }