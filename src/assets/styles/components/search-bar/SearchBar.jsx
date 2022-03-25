import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="wrap">
      <div className="search">
          
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
      </div>
    </div>
  )
}

export default SearchBar;