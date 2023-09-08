import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props){

    // console.log(props.expense.title);

    // const [title, setTitle] = useState(props.expense.title);

    const clickHandler = ()=> {
        setTitle("Updated!");
        // console.log(title);
    };

    return (
        <li>
    <Card className="expense-item">
        <ExpenseDate date = {props.expense.date} />
       
        <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
        </div>

        {/* <button onClick={clickHandler}> Change Title</button> */}
    </Card >
    </li>
    );
}

export default ExpenseItem;