import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class Mario extends Component {
  render() {
    return (
      <div className="Mario">
      <h1>This is the Mario component</h1>
      {/* <ul>
      <li><Link to='/'>Home</Link></li>
      </ul> */}
      </div>
    );
  }
}

export default Mario;
