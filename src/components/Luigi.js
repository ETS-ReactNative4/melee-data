import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Gif from "./Gif";
import jab1 from "../images/luigi/jab1.gif";
import jab2 from "../images/luigi/jab2.gif";
import jab3 from "../images/luigi/jab3.gif";
import ftilt from "../images/luigi/ftilt.gif";
import dtilt from "../images/luigi/dtilt.gif";
import uptilt from "../images/luigi/uptilt.gif";
import dashattack from "../images/luigi/dashattack.gif";
import fsmash from "../images/luigi/fsmash.gif";
import dsmash from "../images/luigi/dsmash.gif";
import upsmash from "../images/luigi/upsmash.gif";
import nair from "../images/luigi/nair.gif";
import fair from "../images/luigi/fair.gif";
import dair from "../images/luigi/dair.gif";
import upair from "../images/luigi/upair.gif";
import bair from "../images/luigi/bair.gif";
import grab from "../images/luigi/grab.gif";
import dashgrab from "../images/luigi/dashgrab.gif";
import neutralb from "../images/luigi/neutralb.gif";
import sideb from "../images/luigi/sideb.gif";
import upb from "../images/luigi/upb.gif";
import downb from "../images/luigi/downb.gif";

class Luigi extends Component {
  render() {
    return (
      <div>
        <h1>Luigi</h1>
        <div className="all-moves">
          <div className="move-card">
            <h3>Jab 1</h3>
            <img src={jab1} width="270px" />
            <ul>
              <li>Total Frames: 15</li>
              <li>Active Frames: 2-3</li>
              <li>Input Window for Jab 2: 3-25</li>
            </ul>
          </div>

          <div className = "move-card">
            <h3>Jab 2</h3>
            <img src={jab2} width="270px" />
            <ul>
              <li>Total Frames: 18</li>
              <li>Active Frames: 3-4</li>
              <li>Input Window for Jab 3: 3-25</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Jab 3</h3>
            <img src={jab3} width="270px" />
            <ul>
              <li>Total Frames: 22</li>
              <li>Active Frames: 5-9</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Tilt</h3>
            <img src={ftilt} width="270px" />
            <ul>
              <li>Total Frames: 32</li>
              <li>Active Frames: 5-7</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Tilt</h3>
            <img src={dtilt} width="270px" />{" "}
            <ul>
              <li>Total Frames: 34</li>
              <li>Active Frames: 5-8</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Tilt</h3>
            <img src={uptilt} width="270px" />{" "}
            <ul>
              <li>Total Frames: 29</li>
              <li>Active Frames: 4-12</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Dash Attack</h3>
            <img src={dashattack} width="270px" />{" "}
            <ul>
              <li>Total Frames: 48</li>
              <li>Active Frames: 6-25</li>
              <li>IASA Frames: 38</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Smash</h3>
            <img src={fsmash} width="270px" />{" "}
            <ul>
              <li>Total Frames: 41</li>
              <li>Active Frames: 12-16</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Smash</h3>
            <img src={uptilt} width="270px" />{" "}
            <ul>
              <li>Total Frames: 39</li>
              <li>Active Frames: 9-11</li>
              <li>Intangibility Frames: 9-11</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Smash</h3>
            <img src={dsmash} width="270px" />{" "}
            <ul>
              <li>Total Frames: 37</li>
              <li>Active Frames: 5-6, 14</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Neutral Air</h3>
            <img src={nair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 45</li>
              <li>Active Frames: 3-32</li>
              <li>Landlag Frames: 16/8 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Air</h3>
            <img src={fair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 74</li>
              <li>Active Frames: 18-22</li>
              <li>Auto Cancel Frames: 1-2, 28-74</li>
              <li>IASA Frame: 60</li>
              <li>Landlag Frames: 21/10 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Back Air</h3>
            <img src={bair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 28</li>
              <li>Active Frames: 6-17</li>
              <li>Auto Cancel Frames: 1-5, 19-28</li>
              <li>Landlag Frames: 15/7 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Air</h3>
            <img src={upair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 33</li>
              <li>Active Frames: 4-9</li>
              <li>IASA Frame: 30</li>
              <li>Landlag Frames: 15/7 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Air</h3>
            <img src={dair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 38</li>
              <li>Active Frames: 10-11, 13,14, 16,17, 19-20, 22-23, 25-26</li>
              <li>IASA Frame: 38</li>
              <li>Auto Cancel Frames: 1-5, 33-38</li>
              <li>Landlag: 23/11 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Neutral B</h3>
            <img src={neutralb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 43</li>
              <li>Active Frames: 14-88</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Up B</h3>
            <img src={upb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 37</li>
              <li>Active Frames: 3-24</li>
              <li>Intangibility Frames: 3-6</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Down B</h3>
            <img src={downb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 79</li>
              <li>Active Frames: 8-9, 12-13, 15-16, 18-19, 21-22, 24-25, 27-28
                38-39
              </li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Side B</h3>
            <img src={sideb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 35</li>
              <li>Active Frames: 12-14</li>
              <li>Reflect Frames: 6-33</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Grab</h3>
            <img src={grab} width="270px" />{" "}
            <ul>
              <li>Total Frames: 30</li>
              <li>Active Frames: 7-8</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Dash Grab</h3>
            <img src={dashgrab} width="270px" />{" "}
            <ul>
              <li>Total Frames: 40</li>
              <li>Active Frames: 11-12</li>
            </ul>
            </div>
          <Link to="/">Hide Component</Link>
        </div>
      </div>
    );
  }
}

export default Luigi;
