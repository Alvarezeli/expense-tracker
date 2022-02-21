import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/index.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SucessModal from "./SucessModal";
import './AddForm.css';

const AddForm = () => {
  const dispatch = useDispatch();

  const cat = categories;

  //abrir categorias
  const [openCategory, setOpenCategory] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  //console.log("soy categorias", category);
  const [openModal, setOpenModal] = useState(false)

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setOpenCategory(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("¡Ingresa los datos requeridos!");
      notify();
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    //console.log("estoy enviando", data);
    setOpenModal(true)
  };

  return (
    <div className="add-form">
      <ToastContainer 
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SucessModal openModal={openModal} setOpenModal={setOpenModal}/>
      <div className="form-item">
        <label>Título</label>
        <input
          placeholder="¿Cuál es el nombre del gasto?"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Monto</label>
        <input
          placeholder="¿Cuál es el monto del gasto?"
          value={amount}
          onChange={(e) => handleAmount(e)}
          className="amount-input"
        />
      </div>
      <div className="category-container-father">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setOpenCategory(!openCategory)}
          >
            <label>{category ? category.title : "Categorias"}</label>

            <i class="fi fi-rr-caret-down"></i>
          </div>
          {openCategory && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-button">
        <button onClick={handleSubmit}>Agregar</button>
      </div>
    </div>
  );
};

export default AddForm;
