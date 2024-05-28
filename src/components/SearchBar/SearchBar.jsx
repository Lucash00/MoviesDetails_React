// SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SearchBarContainer, SearchIcon, SearchInput } from './SearchBar.styled';

const SearchBar = ({ value, onChange, placeholder, onSearch }) => {
  const searchBarRef = useRef(null);

  const handleSearchChange = (event) => {
    const inputValue = event.target.value || '';
    onChange(inputValue.toLowerCase());
  };

  const handleClick = (event) => {
    if (searchBarRef.current && searchBarRef.current.contains(event.target)) {
      return;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <SearchBarContainer ref={searchBarRef}>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
