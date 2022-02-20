import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './SucessModal.css'

const SucessModal = ({openModal, setOpenModal}) => {
   

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

  return (
    <Modal isOpen={openModal} style={customStyles}>
        <div className='modal-inner'>
            <img src={require('../../Assets/Imagenes/check-mark.png')} alt='add-expense' className='add-img'/>
            <label>¡Gasto agregado exitosamente!</label>
            <Link  to='/'>
            <button>Aceptar</button>
            </Link>
           
        </div>
         </Modal>
  )
}

export default SucessModal