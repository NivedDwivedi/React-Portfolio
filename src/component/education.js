import React, { Component } from "react";

export default class Header extends Component {
    render() {
      return (
        <div class="education">
		<div class="course">
			<h1>B.TECH (IT)</h1>
			<br/>
			<h2>KIET Group of Institution</h2>
			<br/>
			<h3>Precentage: 81.4%(till 6th sem)</h3>
			<br/><br/>
		</div>
		<div class="course">
			<h1>INTERMEDIATE</h1>
			<br/>
			<h2>S.D. Inter College</h2>
			<br/>
			<h3>Precentage: 88.6%</h3>
            <br/><br/>
		</div>
		<div class="course">
			<h1>HIGH SCHOOL</h1>
			<br/>
			<h2>S.D. Inter College</h2>
			<br/>
			<h3>Precentage: 86.6%</h3>
            <br/><br/>
		</div>
	</div>
      );
    }
  }