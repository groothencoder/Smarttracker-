import React from 'react';
import './ExpensesList.css';
import ExpenseItems from './ExpenseItems';
const ExpensesList = (props) =>{

    if(props.count.length === 0 ){
    return <h2 className='expenses-list__fallback'>found no Expenses </h2>
    }
    return(
        <ul className='expense-list'>
        { props.count.map((expenses)=>(
        <ExpenseItems
         key = {expenses.id}
         title= {expenses.title}
         amount= {expenses.amount}
         date={expenses.date}
        />
      ))}
        </ul>
    )
};

export default ExpensesList;



