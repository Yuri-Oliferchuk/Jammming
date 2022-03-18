import React from 'react';
import { SerchBar } from '../SearchBar/SerchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist} from '../Playlist/Playlist'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SerchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
