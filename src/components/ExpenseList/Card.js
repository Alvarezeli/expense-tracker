import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteExpense } from "../../redux/actions";

const Card = ({ item, notifySuccess }) => {
  // console.log('soy item en card', item)
  const dispatch = useDispatch();
  const time = moment(item.createAt).fromNow();

  const handleDelete = () => {
    dispatch(deleteExpense(item))
    notifySuccess();
  }

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <h4>{item.title}</h4>
        <p>{time}</p>
      </div>
      <div className="card-right">
        <div>
          <h3>{item.amount}</h3>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i class="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
