import './Expenses.css';
import { useState } from 'react';
import Card from './Card/Card'
import ExpensesChart from './ExpensesChart/ExpensesChart'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList/ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  }
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>

  );
};

export default Expenses;