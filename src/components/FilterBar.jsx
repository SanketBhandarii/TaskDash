const FilterBar = ({ currentFilter, setFilter }) => {
    const filters = ['All', 'Completed', 'Pending', 'Overdue'];
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-6 mt-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={`px-5 py-2 rounded-full font-medium transition-all 
              ${
                currentFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterBar;
  