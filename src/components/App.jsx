import { useState } from 'react';
import '../styles/App.css';
import Search from './Search';
import SearchResults from './SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='app'>
      <img className='logo' src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='NASA logo' />
      <Search setSearchResults={setSearchResults} />
      <div className='search-results'>
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
