import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({
  transactions,
  addTransaction,
  searchTransactions,
}) {
  return (
    <div>
      <Search searchTransactions={searchTransactions} />
      <AddTransactionForm onAddTransaction={addTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
