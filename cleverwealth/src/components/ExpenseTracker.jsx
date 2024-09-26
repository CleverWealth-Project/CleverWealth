import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/expenses");
        setExpenses(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <h2>Expense Tracker for {expenses.name}</h2>
      <h3>Email: {expenses.email}</h3>
      <ul>
        {expenses.transactions.map((transaction) => (
          <li key={transaction.transactionId}>
            {transaction.date}: {transaction.amount} - {transaction.category} (
            {transaction.paymentMethod})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
