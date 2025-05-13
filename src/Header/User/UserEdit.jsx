import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../Redux/userSlice';
import { MdModeEditOutline } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./UserEdit.css";

function UserEdit() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [modalShow, setModalShow] = useState(false);
  const [editedUser, setEditedUser] = useState(currentUser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateUser(editedUser));
    setModalShow(false);
  };

  return (
    <div className="userEditContainer">
      {currentUser ? (
        modalShow ? (
          <div className="editFormContainer">
            <div className="editIcon" onClick={() => setModalShow(prev => !prev)}>
              
            </div>

            <Form className="editForm">
              <Form.Control
                size="sm"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={editedUser.firstName}
                onChange={handleChange}
                className="editInput"
              />
              <Form.Control
                size="sm"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={editedUser.lastName}
                onChange={handleChange}
                className="editInput"
              />
              <Form.Control
                size="sm"
                type="text"
                placeholder="Address"
                name="address"
                value={editedUser.address}
                onChange={handleChange}
                className="editInput"
              />
              <Button variant="primary" onClick={handleSave} className="saveButton">Save</Button>
            </Form>
          </div>
        ) : (
          <div className="userInfo">
            <div className="editIcon" onClick={() => setModalShow(prev => !prev)}>
              <MdModeEditOutline size={30} color="pink" />
            </div>

            <p><strong>First Name:</strong> {editedUser.firstName}</p>
            <p><strong>Last Name:</strong> {editedUser.lastName}</p>
            <p><strong>Address:</strong> {editedUser.address}</p>
          </div>
        )
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}

export default UserEdit;
