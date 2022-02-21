import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import { deleteExpense } from "../../redux/actions";

const Card = ({ item, notifySuccess }) => {
  // console.log('soy item en card', item)
  const dispatch = useDispatch();
  const time = moment(item.createdAt)
    .locale("es")
    .format("dddd LL")
    .split("de 2022");

  //Eliminar gasto
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };

  return (
    <div
      className="card"
      style={{ borderRight: `10px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className="card-image"
        />
        <div className="puedes">
          <h4>{item.title}</h4>
          <p>{time}</p>
        </div>
      </div>
      <div className="card-right">
        <h3>$ {item.amount}</h3>
        <div className="delete-icon" onClick={handleDelete}>
        <i class="fi fi-rr-cross-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
