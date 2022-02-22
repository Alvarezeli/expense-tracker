import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./SucessModal.css";

const SucessModal = ({ openModal, setOpenModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
     // padding: "50px",
    },
  };

  return (
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner">
        <img
          src={require("../../Assets/Imagenes/check-mark.png")}
          alt="add-expense"
          className="add-img"
        />
        <label>¡Gasto agregado exitosamente!</label>
        <div className='buttpn'>
        <Link to="/">
          <button>Aceptar</button>
        </Link>
        </div>
        
      </div>
    </Modal>
  );
};

export default SucessModal;
