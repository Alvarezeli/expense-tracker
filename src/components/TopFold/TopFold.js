import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions";
import "./TopFold.css";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topFold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fi fi-rr-search"></i>
            <input
              value={query}
              placeholder="Busca tus gastos..."
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <button><h4>Agregar gasto</h4></button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi fi-rr-angle-double-left"></i>
              <label>Volver</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fi fi-rr-cross-circle"></i>
              <label>Cancelar</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
