// import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import Components
import SearchBar from './components/search-bar'

// Youtube API KEY
const API_KEY = "AIzaSyCj992jzxs4-SZhLDITW_fwy6zRGXqVMpk";

// declare dumb component that contains our other components
const App = () => {
  return (
      <div>
        <SearchBar/>
      </div>
  );
};

// render the component to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
