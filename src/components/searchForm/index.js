import React from 'react';
import './index.css';

export function SearchForm(props){

  function search(e) {
    const value=e.target.value;
    props.search(value);
  }

  return(
    <div className="searchForm">
      <span>🔍</span>
      <input type="text" value={props.value} onChange={search} autoFocus/>
    </div>
  );
}