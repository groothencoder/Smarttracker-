import Card from '../UI/Card';
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { BsCurrencyRupee } from "react-icons/bs";
// import { useState } from 'react';

const ExpenseItems = (props) => {
  // const  [title , setTitle] = useState(props.title);
    
  // const clickHandler = ()=>{
  //   setTitle('Updated!');
  // }

    return(
      <Card>
         

      <div className='expense-items'>
        <ExpenseDate date = {props.date} />  
        <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'><BsCurrencyRupee/> {props.amount}</div>  
        {/* <button onClick={clickHandler}> Click  title</button>   */}
        </div>
      </div>
      
      </Card>
    );
}
export default ExpenseItems; 