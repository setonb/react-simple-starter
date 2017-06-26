import React, { Component } from 'react';

class SearchBar extends Component {
  handleInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <input onChange={event => console.log(event.target.value)} type="text"/>
    );
  }
}

export default SearchBar;
