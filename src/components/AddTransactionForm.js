import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const { date, description, category, amount } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !description || !category || !amount) {
      console.error("All fields are required");
      return;
    }
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount),
    };

    try {
      const response = await fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      const data = await response.json();

      console.log(data);
      onAddTransaction(data); // Assuming the response is the added transaction object
      setFormData({ date: "", description: "", category: "", amount: "" });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={handleChange} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
