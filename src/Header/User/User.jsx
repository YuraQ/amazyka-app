
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { IoMdContact } from "react-icons/io";
import UserOrder from './UserOrder';
import UserEdit from './UserEdit';

function User(props) {
  // Отримуємо поточного користувача з Redux





  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <UserEdit />
          <UserOrder />

      </Modal.Body>
    </Modal>
  );
}

function BtnUser() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="cart-container" onClick={() => setModalShow(true)}>
        <IoMdContact size={30} color="pink" />
      </div>

      <User
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BtnUser;
