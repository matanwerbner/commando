import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Commando</h1>
        {this.props.children}
      </div>
    );
  }
};

export default App;
