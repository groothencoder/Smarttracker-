import React from 'react';
import Card from './UI/Card';
import Expenses from './ExpensesOld/Expenses';
import NewExpense from './NewExpenses/NewExpense';
import { useState } from 'react';
import './Home.css';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14 ),
    },
    {   id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 3, 12 ),
       },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 10, 28 ),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021,2,31),
    },
  ] 
const About = () => {
    const[expenses,setExpenses]= useState(DUMMY_EXPENSES);


  const addExpenseHandler = expenses =>{
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) =>{
      return[expenses, ...prevExpenses];
    });
  };
    return(
        <Card>
        <div>
          {/* <h1>Expense Tracker </h1> */}
    
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses count ={expenses}/>
        </div>
          </Card>
    )
};
export default About;