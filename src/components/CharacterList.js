import React, { Component } from 'react';
import Mario from './Mario';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
  render() {
    return (
      <div>


<Link to ='/mario'>Mario</Link>

<Switch>
  <Route exact path = '/mario' component={Mario}/>
</Switch>

      </div>
    );
  }
}

export default CharacterList;
