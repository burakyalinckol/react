import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';

export default class App extends Component {
  state = {
    characterData: [],
  };
  getCharacterData = () => {
    axios.get('https://rickandmortyapi.com/api/character').then(req => {
      const characterData = req.data.results;
      this.setState({ characterData });
    });
  };
  componentDidMount = () => {
    this.getCharacterData();
  };
  render() {
    return (
      <div>
        <Cards characterData={this.state.characterData} />
      </div>
    );
  }
}
