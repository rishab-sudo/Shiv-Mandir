import React, { useState } from "react"
import { useSelector } from "react-redux";
import "../Home/Crousel"
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Crousel from "../Home/Crousel";
import "./Home.css"
import About from "../../Components/About/About"
import Event from "../../Components/Event/Event"
import Contact from "../../Components/Contact/Contact"
import Login from "../../Components/Login/Login"
import Footer from "../../Components/Footer/Footer"
import Donate from "../../Components/Donate/Donate"


const Home = (props) => {
  const { FormData } = useSelector((state) => ({
    ...state.temple,
  }));
  console.log("home", FormData)

  // const [transactions, setTransactions] = useState([]);
  // const [text, setText] = useState('');
  // const [amount, setAmount] = useState(0);

  // const addTransaction = () => {
  //   if (text.trim() === '' || amount === 0) return;

  //   const newTransaction = {
  //     id: Math.floor(Math.random() * 100000000),
  //     text,
  //     amount: +amount
  //   };

  //   setTransactions([...transactions, newTransaction]);
  //   setText('');
  //   setAmount(0);
  // };

  // const deleteTransaction = (id) => {
  //   const updatedTransactions = transactions.filter(
  //     (transaction) => transaction.id !== id
  //   );
  //   setTransactions(updatedTransactions);
  // };

  // const income = transactions
  //   .filter((transaction) => transaction.amount > 0)
  //   .reduce((total, transaction) => total + transaction.amount, 0);

  // const expense = transactions
  //   .filter((transaction) => transaction.amount < 0)
  //   .reduce((total, transaction) => total + transaction.amount, 0);

  // const balance = transactions.reduce(
  //   (total, transaction) => total + transaction.amount,
  //   0
  // );
  return (
    <>
     {/* <div className="container" style={{marginTop:"5rem"}}>
      <h2 className="title">Finance Tracker</h2>

      <div className="balance">
        <h3>Your Balance</h3>
        <h2>${balance.toFixed(2)}</h2>
      </div>

      <div className="income-expense">
        <div className="income">
          <h3>Income</h3>
          <p className="money plus">${income.toFixed(2)}</p>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>

      <h3 className="history">Transaction History</h3>

      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li
            className={
              transaction.amount < 0 ? 'transaction minus' : 'transaction plus'
            }
            key={transaction.id}
          >
            <span className="transaction-text">{transaction.text}</span>
            <span className="transaction-amount">
              {transaction.amount < 0 ? '-' : '+'}${Math.abs(
                transaction.amount
              ).toFixed(2)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <h3 className="add-transaction">Add New Transaction</h3>
      <form className="transaction-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <button className="add-btn" onClick={addTransaction}>
          Add Transaction
        </button>
      </form>
    </div> */}
      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
      <section id="Home">
        <Container fluid className="g-5">
          <Row>

            <Crousel />

          </Row>
        </Container>

      </section>

      <About />
      <Event />
      <Contact />
      <Login />
      <Donate />
      <Footer />

    </>
  )
}
export default Home







