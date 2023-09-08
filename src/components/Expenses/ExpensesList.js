import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {


    let expenseContents = <p>No expenses found.</p>;

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }


  return <ul className="expenses-list">
    {
    props.items.map((item) => {
      return <ExpenseItem key={item.id} expense = {item} />
     })}
  </ul>
};

export default ExpensesList;