import React, { useState, useEffect } from "react";

function Search({ searchTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm !== "") {
        searchTransactions(searchTerm);
      }
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(delay);
  }, [searchTerm, searchTransactions]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
