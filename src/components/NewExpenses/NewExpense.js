import React,{useState} from "react";
import ExpenseForm from "./ExpensesForm";
import './NewExpense.css'
const NewExpense =(props) =>{
  const[isEditing, setisEditing] = useState(false);

      const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={

            ...enteredExpenseData,
            id : Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setisEditing(false);
      };

  const startEditingHandler = () =>{
    setisEditing(true);
  };

  const stopEditingHandler = () =>{
    setisEditing(false);
  }
    return (
     <div className="new-expense">
      {!isEditing && (<button onClick={startEditingHandler}>Add New Expenses</button>)} 
       {isEditing && (
        
        <ExpenseForm  
       onSaveExpenseData ={SaveExpenseDataHandler}
        onCancel={stopEditingHandler}
        /> 
        )}
     </div>
    )
};





export  default NewExpense;