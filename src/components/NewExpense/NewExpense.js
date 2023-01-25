import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
        //console.log(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEnditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEnditingHandler} />}
        </div>
    );
};

export default NewExpense;
