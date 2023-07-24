import React,{useState} from 'react';
import Card from '../UI/Card';

// import ExpenseItems from './ExpenseItems';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// import Card from './Card';

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =props.count.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });


  
  
    return(
      // <>
      <Card>
     <div className="expenses">
        <ExpensesFilter 
        selected= {filteredYear}
         onChangeFilter={filterChangeHandler}
         />
       <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList count ={filteredExpenses}/>


     </div>
     </Card>
    //  </>
    );
  }
  export default Expenses;
  
  // let expenseContent =<p>No Expenses found ! kindly enter the expenses</p>;
  // if(filteredExpenses.length > 0 ){
  //   expenseContent = filteredExpenses.map((expenses)=>(
  //     <ExpenseItems
  //      key = {expenses.id}
  //      title= {expenses.title}
  //      amount= {expenses.amount}
  //      date={expenses.date}
  //     />
  //   ));

  // }
  
  /* {filteredExpenses.length === 0 ? <p>NO Expensefound </p> : filteredExpenses.map((expenses)=>(
    <ExpenseItems
     key = {expenses.id}
     title= {expenses.title}
     amount= {expenses.amount}
     date={expenses.date}
    />
  ))} */
/* <ExpenseItems
title ={props.count[0].title}
amount = {props.count[0].amount}
date = {props.count[0].date}
/>
<ExpenseItems
 title ={props.count[1].title}
 amount = {props.count[1].amount}
 date = {props.count[1].date}
 />
<ExpenseItems
title ={props.count[2].title}
amount = {props.count[2].amount}
date = {props.count[2].date}
/>
<ExpenseItems
 title ={props.count[3].title}
 amount = {props.count[3].amount}
 date = {props.count[3].date}
 /> */



//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14 ),
//     },
//     {   id: 'e2',
//         title: 'New TV',
//         amount: 799.49,
//         date: new Date(2021, 2, 12 ),
//        },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28 ),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021,2,31),
//     },
// ]