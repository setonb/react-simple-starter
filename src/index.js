// import necessary libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import Components
import SearchBar from './components/search-bar'

// Youtube API KEY
const API_KEY = "AIzaSyCj992jzxs4-SZhLDITW_fwy6zRGXqVMpk";

// declare dumb component that contains our other components
class App extends Component {
  constructor(props) {
      super(props);

      // Initially populatee the videos array
      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        // compact using ES6 if key and property are same variable name
        this.setState({ videos });
      });

      this.state = {
        videos: []
      };
  }

  render() {
    return (
        <div>
          <SearchBar/>
        </div>
    );
  }
};

// render the component to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
