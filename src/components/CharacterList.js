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



  <li>

<Link to ='/luigi'>Luigi</Link>

</li>


  <li>

<Link to ='/ganondorf'>Ganondorf</Link>

</li>


</ul>

<Switch>
  <Route exact path = '/mario' component={Mario}/>
</Switch>

<Switch>
  <Route exact path = '/luigi' component={Luigi}/>
</Switch>

<Switch>
  <Route exact path = '/ganondorf' component={Ganondorf}/>
</Switch>



      </div>
    );
  }
}

export default CharacterList;
