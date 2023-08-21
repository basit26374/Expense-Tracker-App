import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (prob) => {
  const [filterYear, setFilterYear] = useState('');

  const year2022Handler = () => {
    setFilterYear('2022');
    prob.onChangeYear('2022');
  };

  const year2021Handler = () => {
    setFilterYear('2021');
    prob.onChangeYear('2021');
  };

  const year2020Handler = () => {
    setFilterYear('2020');
    prob.onChangeYear('2020');
  };

  const year2019Handler = () => {
    setFilterYear('2019');
    prob.onChangeYear('2019');
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select>
          <option value='2022' onClick={year2022Handler}>2022</option>
          <option value='2021' onClick={year2021Handler}>2021</option>
          <option value='2020' onClick={year2020Handler}>2020</option>
          <option value='2019' onClick={year2019Handler}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;