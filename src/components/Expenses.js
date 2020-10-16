import React from 'react';
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';

import Expense from './Expense'
import TotalExpenses from './TotalExpenses'

const Expenses = () =>  {
    return (
            <div id="Expenses">
                <h4 id="expense-header">What are your monthly expenses?</h4>

                <Button id="add-expense-btn" block>
                  Add an expense
                </Button>

                <ul id="expense-list">
                  <Expense/>
                  <Expense/>
                  <Expense/>
                </ul>

                <TotalExpenses/><br/>

                <Button className="nav-btn" block>
                   <Link className="link" to="savings-plan">Go to Your Savings Plan</Link>
                </Button>

            </div>
    );
}

export default Expenses;