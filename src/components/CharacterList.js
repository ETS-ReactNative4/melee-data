import React, { Component } from 'react';
import Mario from './Mario';
import Luigi from './Luigi';
import Ganondorf from './Ganondorf';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
  render() {
    return (
      <div>

<ul>
  <li>
<Link to ='/mario'>Mario</Link>
</li>

<Switch>
  <Route exact path = '/mario' component={Mario}/>
</Switch>

  <li>

<Link to ='/luigi'>Luigi</Link>

</li>

<Switch>
  <Route exact path = '/luigi' component={Luigi}/>
</Switch>

  <li>

<Link to ='/ganondorf'>Ganondorf</Link>

</li>

<Switch>
  <Route exact path = '/ganondorf' component={Ganondorf}/>
</Switch>

</ul>


      </div>
    );
  }
}

export default CharacterList;
