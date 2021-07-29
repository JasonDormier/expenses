import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [toggleView, setToggledView] = useState(false)

    const titleChangeHandler = (event) => {
        // setUserInput((prevState) => {
        // ...userInput,
        // enteredTitle: event.target.value
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        //prevent the page from reloading
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        toggleHandlerFalse();
    }

    const toggleHandlerTrue = () => {
        setToggledView(true);
    }

    const toggleHandlerFalse = () =>{
        setToggledView(false);
    }

    if (toggleView === false) {
        return (
            <button onClick={toggleHandlerTrue}>Add Expense</button>
        )
    }

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2025-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={toggleHandlerFalse}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;