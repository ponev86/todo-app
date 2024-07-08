import React from 'react';
import { Filter } from '../App';

interface FilterButtonsProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div>
      <button
        onClick={() => onFilterChange(Filter.all)}
        disabled={currentFilter === Filter.all}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange(Filter.active)}
        disabled={currentFilter === Filter.active}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange(Filter.completed)}
        disabled={currentFilter === Filter.completed}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
