import React from "react";
import Card from "./Card";
import { useSelector } from 'react-redux'
import "./ExpenseList.css";
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
 const {expenseList, query} = useSelector((state) => state.expenses)
 //console.log('soy expenses', expenseList)
 const filteredList = expenseList.filter((item) => item.title.includes(query))


 const notifySuccess = () => toast.success('Gasto eliminado')

  return (
    <div className="expense-list">
       <ToastContainer 
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length
        ? filteredList.map((item) => <Card item={item} key={Math.round(1, 5)} notifySuccess={notifySuccess} />)
        : <div className="empty-list">
          <img src={require('../../Assets/Imagenes/money.png')} alt='Lista vacia' className="empty-image"/>
          <label>¡Opsss, tu lista de gastos esta vacía!</label>
          </div>}
    </div>
  );
};

export default ExpenseList;
