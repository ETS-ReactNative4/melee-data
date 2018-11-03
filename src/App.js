import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>
        Character Data Compilation
      </h1>
      <p>
        Going through a ton of old smashboards threads and waiting 
        forever for the entire page to load is lame. My goal is to 
        put all of the information right here, and have it load
        super fast (thanks React!). 
      </p>
      <h2>
        Choose your character:
        <br/>
        <select>
        <option value="Mario">Mario</option>
            <option value="Mario">Mario</option>
            <option value="Donkey Kong">Donkey Kong</option>
            <option value="Link">Link</option>
            <option value="Samus">Samus</option>
            <option value="Yoshi">Yoshi</option>
            <option value="Kirby">Kirby</option>
            <option value="Fox">Fox</option>
            <option value="Pikachu">Pikachu</option>
            <option value="Luigi">Luigi</option>
            <option value="Ness">Ness</option>
            <option value="Jigglypuff">Jigglypuff</option>
            <option value="Captain Falcon">Captain Falcon</option>
            <option value="Bowser">Bowser</option>
            <option value="Peach">Peach</option>
            <option value="Ice Climbers">Ice Climbers</option>
            <option value="Zelda">Zelda</option>
            <option value="Sheik">Sheik</option>
            <option value="Marth">Marth</option>
            <option value="Roy">Roy</option>
            <option value="Mewtwo">Mewtwo</option>
            <option value="Ganondorf">Ganondorf</option>
            <option value="Falco">Falco</option>
            <option value="Mr. Game & Watch">Mr. Game & Watch</option>
            <option value="Pichu">Pichu</option>
            <option value="Young Link">Young Link</option>
            <option value="Dr. Mario">Dr. Mario</option>
          </select>
          <br/>
          <button>Submit</button>
        </h2>


      </div>
    );
  }
}

export default App;
