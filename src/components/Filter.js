import React from 'react';

function Filter(props) {

  function filterHandler(event) {
    props.onFilterChange(event.target.value)
  };

  return (
    <div className='Tasks-filter'>
    <label>Filter: </label>
    <select value={props.selected} onChange={filterHandler}>
      <option value='all'>All</option>
      <option value='done'>Done</option>
      <option value='pending'>Pending</option>

    </select>
  </div>
  )
};

export default Filter;
