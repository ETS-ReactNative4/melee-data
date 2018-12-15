import React, { Component } from 'react';
import './App.css';
import Mario from './components/Mario';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from './components/Card';
import CharacterList from './components/CharacterList';



class App extends Component {
  render() {
    return (
      <body>
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
        <br/>

          <br/>

    
    

<br/>

<CharacterList/>


      </div>
      </body>
    );
  }
}

export default App;
