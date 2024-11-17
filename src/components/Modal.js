import React from 'react'

const Modal = ({setIsOpen}) => {
  return (
    <>
      <div className='modal-div' onClick={() => setIsOpen(false)}>
        <div style={modalStyle}>
            <h3>Test Modal</h3>
            <button  onClick={() => setIsOpen(false)}>Close</button>
            <p>This is a Simple Modal</p>
        </div>
      </div>
    </>
  )
}

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    Index: 1000,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };
export default Modal;
