import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Quote from './Quote';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </div>
    );
  }
}

export default App;
