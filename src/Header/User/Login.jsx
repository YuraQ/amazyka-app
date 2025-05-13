import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IoMdContact } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/userSlice';
import BtnUser from './User';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Перевірка користувача в масиві
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            dispatch(login({ token: user.token }));
            setError(null);
            props.onHide(); // Закриваємо модальне вікно після успішного входу
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Modal {...props} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {error && <p className="text-danger">{error}</p>}

                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Login</Button>
                </Modal.Body>
            </Form>
        </Modal>
    );
}

function BtnLogin() {
    const [modalShow, setModalShow] = useState(false);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Перевірка автентифікації

    return (
        <>
            {!isAuthenticated ? (
                <div className="cart-container" onClick={() => setModalShow(true)}>
                    <IoMdContact size={30} color="gray" />
                </div>
            ) : (
                <BtnUser /> // Якщо користувач авторизований, відображаємо кнопку користувача
            )}

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default BtnLogin;
