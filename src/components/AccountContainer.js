import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(false);
  useEffect(() => {
    if (sort) {
      handleSort();
      setSort(false);
      return;
    }
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then((transaction) => setTransactions(transaction));
  }, [query, sort]);

  const handleSort = () => {
    setTransactions(transactions.sort((a, b) => a.description - b.description));
    console.log(transactions);
  };

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList
        onSort={() => setSort(!sort)}
        transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
