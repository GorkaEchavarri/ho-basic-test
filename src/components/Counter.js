import React, { useState } from 'react';
import classes from './Counter.module.css';
import Filter from './Filter';


function Counter(props) {
  const [filteredType, setFilteredType] = useState("All");

  const filterHandler = (selectedType) => {
    setFilteredType(selectedType);
    props.onFilterChange(selectedType);
  };

  return (
    <div className={classes.container}>
      <span>Total Tasks: {props.tasks.length}</span>
      <span><Filter selected={filteredType} onFilterChange={filterHandler} />
        </span>
    </div>
  )
};

export default Counter;
