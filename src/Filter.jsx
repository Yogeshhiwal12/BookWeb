import React from "react";

const Filter = ({ handleFilter }) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [filterType, setFilterType] = React.useState("title");

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    handleFilter(filterType, filterValue);
  };

  const clearFilter = () => {
    setFilterValue("");
    handleFilter(filterType, "");
  };

  return (
    <div className="filter">
      <form onSubmit={handleFilterSubmit}>
        <label>
          Filter by:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </label>
        <input type="text" value={filterValue} onChange={handleInputChange} placeholder={`Enter ${filterType === "title" ? "title" : "author"}`} />
        <button type="submit">Apply Filter</button>
        <button type="button" onClick={clearFilter}>
          Clear Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
