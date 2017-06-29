// import necessary libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// import Components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// Youtube API KEY
const API_KEY = "AIzaSyCj992jzxs4-SZhLDITW_fwy6zRGXqVMpk";

// declare dumb component that contains our other components
class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      // Initially populatee the videos array
      this.videoSearch('Heroes of the Storm');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    );
  }
};

// render the component to the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
