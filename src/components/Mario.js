import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Gif from "./Gif";
import jab1 from "../images/mario/jab1.gif";
import jab2 from "../images/mario/jab2.gif";
import jab3 from "../images/mario/jab3.gif";
import ftilt from "../images/mario/ftilt.gif";
import dtilt from "../images/mario/dtilt.gif";
import uptilt from "../images/mario/uptilt.gif";
import dashattack from "../images/mario/dashattack.gif";
import fsmash from "../images/mario/fsmash.gif";
import dsmash from "../images/mario/dsmash.gif";
import upsmash from "../images/mario/upsmash.gif";
import nair from "../images/mario/nair.gif";
import fair from "../images/mario/fair.gif";
import dair from "../images/mario/dair.gif";
import upair from "../images/mario/upair.gif";
import bair from "../images/mario/bair.gif";
import grab from "../images/mario/grab.gif";
import dashgrab from "../images/mario/dashgrab.gif";

// import neutralb from "../images/mario/neutralb.gif";
// need to find a working gif

import sideb from "../images/mario/sideb.gif";
import upb from "../images/mario/upb.gif";
import downb from "../images/mario/downb.gif";

class Mario extends Component {
  render() {
    return (
      <div className="Mario">
        <h1>Mario</h1>
        <br />

<div classname = "flex-row">
          <div className="move-card">
            <h3>Jab 1</h3>
            <img src={jab1} width="270px" />
            <p>Total Frames: 15</p>
            <p>Active Frames: 2-3</p>
            <p>Input Window for Jab 2: 3-25</p>
          </div>

          <div className="move-card">
            <h3>Jab 2</h3>
            <img src={jab2} width="270px" />
            <p>Total Frames: 18</p>
            <p>Active Frames: 3-4</p>
            <p>Input Window for Jab 3: 3-25</p>
          </div>
          </div>

        <h3>Jab 3</h3>
        <img src={jab3} width="270px" />
        <p>Total Frames: 22</p>
        <p>Active Frames: 5-9</p>

        <h3>Forward Tilt</h3>
        <img src={ftilt} width="270px" />
        <p>Total Frames: 32</p>
        <p>Active Frames: 5-7</p>

        <h3>Down Tilt</h3>
        <img src={dtilt} width="270px" />
        <p>Total Frames: 34</p>
        <p>Active Frames: 5-8</p>

        <h3>Up Tilt</h3>
        <img src={uptilt} width="270px" />
        <p>Total Frames: 29</p>
        <p>Active Frames: 4-12</p>

        <h3>Dash Attack</h3>
        <img src={dashattack} width="270px" />
        <p>Total Frames: 48</p>
        <p>Active Frames: 6-25</p>
        <p>IASA Frames: 38</p>

        <h3>Forward Smash</h3>
        <img src={fsmash} width="270px" />
        <p>Total Frames: 41</p>
        <p>Active Frames: 12-16</p>

        <h3>Up Smash</h3>
        <img src={uptilt} width="270px" />
        <p>Total Frames: 39</p>
        <p>Active Frames: 9-11</p>
        <p>Intangibility Frames: 9-11</p>

        <h3>Down Smash</h3>
        <img src={dsmash} width="270px" />
        <p>Total Frames: 37</p>
        <p>Active Frames: 5-6, 14</p>

        <h3>Neutral Air</h3>
        <img src={nair} width="270px" />
        <p>Total Frames: 45</p>
        <p>Active Frames: 3-32</p>
        <p>Landlag Frames: 16/8 (L-Canceled)</p>

        <h3>Forward Air</h3>
        <img src={fair} width="270px" />
        <p>Total Frames: 74</p>
        <p>Active Frames: 18-22</p>
        <p>Auto Cancel Frames: 1-2, 28-74</p>
        <p>IASA Frame: 60</p>
        <p>Landlag Frames: 21/10 (L-Canceled)</p>

        <h3>Back Air</h3>
        <img src={bair} width="270px" />
        <p>Total Frames: 28</p>
        <p>Active Frames: 6-17</p>
        <p>Auto Cancel Frames: 1-5, 19-28</p>
        <p>Landlag Frames: 15/7 (L-Canceled)</p>

        <h3>Up Air</h3>
        <img src={upair} width="270px" />
        <p>Total Frames: 33</p>
        <p>Active Frames: 4-9</p>
        <p>IASA Frame: 30</p>
        <p>Landlag Frames: 15/7 (L-Canceled)</p>

        <h3>Down Air</h3>
        <img src={dair} width="270px" />
        <p>Total Frames: 38</p>
        <p>Active Frames: 10-11, 13,14, 16,17, 19-20, 22-23, 25-26</p>
        <p>IASA Frame: 38</p>
        <p>Auto Cancel Frames: 1-5, 33-38</p>
        <p>Landlag: 23/11 (L-Canceled)</p>
        

        
  


        <Link to="/">Hide Component</Link>
      </div>
    );
  }
}

export default Mario;
