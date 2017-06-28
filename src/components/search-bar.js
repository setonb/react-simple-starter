import React, { Component } from 'react';

class SearchBar extends Component {
  // All Class based Components have a constructor
  constructor(props) {
    // This ic for the React.Component constructor
    super(props);

    // This initializes state with any properties and values needed
    this.state = { term: '' };
  }

  // This function isn't needed because we're using ES6 simple arrow function on the input
  handleInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
