import React, { Component } from 'react'
import {a} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">NewsMonkey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">General</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/business">Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/entertainment">Entertainment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="science">Science</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sports">Sports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/technology">Technology</a>
      </li>
    </ul>
   
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar