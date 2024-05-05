import React from "react";
import Transaction from "./Transaction";
function TransactionsList({ onSort, transactions }) {
  const list = transactions.map((item) => {
    return (
      <Transaction
        id={item.id}
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th onClick={onSort}>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;
