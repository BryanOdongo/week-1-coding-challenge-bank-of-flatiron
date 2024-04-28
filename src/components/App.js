import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  };

  const addTransaction = (newTransaction) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]))
      .catch((error) => console.error("Error adding transaction:", error));
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() =>
        setTransactions(
          transactions.filter((transaction) => transaction.id !== id)
        )
      )
      .catch((error) => console.error("Error deleting transaction:", error));
  };

  const searchTransactions = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        transactions={transactions}
        addTransaction={addTransaction}
        deleteTransaction={deleteTransaction}
        searchTransactions={searchTransactions}
      />
    </div>
  );
}

export default App;
