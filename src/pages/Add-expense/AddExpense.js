import React from "react";
import AddForm from "../../components/AddForm/AddForm";
import TopFold from "../../components/TopFold/TopFold";
import './AddExpense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
