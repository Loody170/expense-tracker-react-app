import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2023");

  //derived state or derived value approach
  // let filterInfoText = "2019, 2021, 2022";

  // if(filteredYear === "2019"){
  //   filterInfoText = "2020, 2021, 2022";
  // }
  // else if(filteredYear === "2021"){
  //   filterInfoText = "2019, 2020, 2022";
  // }
  // else {
  //   filterInfoText = "2019, 2020, 2021";
  // }

  const saveYear = (year)=>{
    // console.log("in expenses.js")
    // console.log(year);
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

    return(
        <div>
          <Card className="expenses">
          <ExpensesFilter onSaveYear={saveYear} selected={filteredYear} />

            {/* {filteredExpenses.length === 0? <p>No expenses found.</p>: 
            filteredExpenses.map((item) => {
              return <ExpenseItem key={item.id} expense = {item} />
             })
            } */}
            <ExpensesChart expenses = {filteredExpenses} />
            {<ExpensesList items={filteredExpenses} />}

          </Card>
        </div>
    );

}

export default Expenses;