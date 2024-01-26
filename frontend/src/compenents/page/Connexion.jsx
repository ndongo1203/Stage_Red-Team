import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import profileImage from '../../Assets/images/Image1.png';
import AuthServices from '../../services/AuthServices';
import { Link, useNavigate } from 'react-router-dom';

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email,
                password,
            };


            const response = await AuthServices.loginUser(data);
            console.log("Response from Auth Service:", response.data);

            localStorage.setItem('todoAppUser', JSON.stringify(response.data));

            alert('Connexion Réussie');

            navigate('/dashboard');

        } catch (err) {
            console.log(err);
            alert((err));
            console.log((err.message || 'Une erreur s\'est produite'));

        }
    };

    return (
        <div className="ConnexionPage" >
            <Container>
                <Row>
                    <div className="text-center text-white mt-3 d-flex justify-content-center">
                        <img src={profileImage} alt="" className='img-fluid' />
                        <h4 className='mx-3'>RED PRODUCT</h4>
                    </div>
                    <Col className='bg-white shadow-sm p-4 mt-3 this-cart-0 mx-auto' md={{ span: 6, offset: 3 }}>
                        <div className="text-center">
                            <h5>Connectez-vous en tant que Admin</h5>
                        </div>
                        <Form className='mt-4'>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="E-mail" style={{ border: 'none', outline: 'none' }} required value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <hr className='mt-4' style={{ border: 'none', borderBottom: '2px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formMotDePasse">
                                <Form.Control type="password" placeholder="Mot de passe" style={{ border: 'none', outline: 'none' }} required value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <hr className='mt-4' style={{ border: 'none', borderBottom: '2px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formRememberMe" className='p-2 fs-5'>
                                <Form.Check
                                    type="checkbox"
                                    label="Gardez-moi connecté"
                                />
                            </Form.Group>
                            <Link to="/Dashboard">
                                <Button onClick={handleSubmit} className='w-100 mt-2 p-2 fs-5' style={{ background: '#494C4F', border: 'none' }} type="submit">
                                    Se connecter
                                </Button>
                            </Link>
                        </Form>
                    </Col>

                    <div className="text-center fs-5 mt-2">
                        <p><a style={{ color: '#FFD964', textDecoration: 'none' }} href='#1'>Mot de passe oublié ?</a></p>
                    </div>

                    <div className="text-center fs-5">
                        <p><span className='text-white'>Vous n'avez pas de compte ?</span> <Link to="/inscription" style={{ color: '#FFD964', textDecoration: 'none' }} href="Inscription">S'inscrire</Link></p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Connexion;