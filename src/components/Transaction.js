import React, { useRef, useState } from "react";

function Transaction({ id, date, description, category, amount }) {
  const [isLoading, setIsLoading] = useState(false);

  const tr = useRef(null);

  const handleDelete = async (e) => {
    setIsLoading(true); // Set loading state to true (optional)
    try {
      const response = await fetch(`http://localhost:8001/transactions/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }
      tr.current.remove();
      // alert("Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    } finally {
      setIsLoading(false); // Set loading state to false (optional)
    }
  };

  return (
    <tr ref={tr} id={id}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
