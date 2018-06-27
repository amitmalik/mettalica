import React, { Component } from 'react';
import SimpleTab from './components/header';

class App extends Component {
  
  render() {
    return (
      <SimpleTab trades={this.props.trades}></SimpleTab>
    );
  }
}

export default (App);
