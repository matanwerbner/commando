import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import './appContainer.scss';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <h1>Commando</h1>
        <div className="appBody">
        {this.props.children}
        </div>
      </div>

    );
  }
};

export default App;
