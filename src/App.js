import './App.css';
import SearchBar from './components/SearchBar'
import React, { useState } from 'react'
import Businesses from './components/Businesses'
import axios from 'axios'
function App() {
  const [results, setResults] = useState([])
  const searchHandler = async (e, location) => {
    e.preventDefault()

    const resp = await axios.post("http://localhost:5000/api/v1", { location: location })

    setResults(resp.data.businesses)
  }
  const secondSearch = async (location) => {

    const resp = await axios.post("http://localhost:5000/api/v2", { location: location })

    setResults(resp.data.businesses)
  }


  return (
    <div className="App">
      <SearchBar searchHandler={searchHandler} secondSearch={secondSearch} />
      {results.length > 0 ?
        <Businesses businesses={results} />
        :
        null
      }
    </div>
  );
}

export default App;
