import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import profileImage from '../../Assets/images/Image1.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../../services/AuthServices';


const Inscription = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = {
                name,
                email,
                password
            };

            const response = await AuthServices.registerUser(data);
            console.log(response.data);


            alert("Inscription réussie !");

            navigate('/');
        } catch (err) {
            console.log(err.response.data);

            alert("Une erreur s'est produite lors de l'inscription.");

        }
    }

    console.log(handleSubmit);


    return (
        <div className="InscriptionPage">
            <Container>
                <Row>
                    <div className="text-center text-white mt-3 d-flex justify-content-center ">
                        <img src={profileImage} alt="" className='img-fluid' />
                        <h2 className='mx-3'>RED PRODUCT</h2>
                    </div>
                    <Col className='bg-white shadow-sm p-4 mt-3 this-cart mx-auto' md={{ span: 6, offset: 3 }}>
                        <div className="">
                            <h5>Inscrivez-vous en tant que Admin</h5>
                        </div>
                        <Form >
                            <Form.Group controlId="formNom">
                                <Form.Control type="text" placeholder="Nom" style={{ border: 'none', outline: 'none' }}  value={name}
                                onChange={(e) => setName(e.target.value)} />
                                <hr className='mt-4' style={{ border: 'none', borderBottom: '2px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="E-mail" style={{ border: 'none', outline: 'none' }} value={email}
                                onChange={(e) => setEmail(e.target.value)}  />
                                <hr className='mt-4' style={{ border: 'none', borderBottom: '2px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formMotDePasse">
                                <Form.Control type="password" placeholder="Mot de passe" style={{ border: 'none', outline: 'none' }} value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                                <hr className='mt-' style={{ border: 'none', borderBottom: '2px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formAcceptTerms" className='p-3 fs-5'>
                                <Form.Check
                                    type="checkbox"
                                    label="Accepter les termes et la politique"
                                // style={{ outline:'none', border: '1px solid #494C4F' }}
                                />
                            </Form.Group>

                            <Link to="/">
                                <Button className='w-100 mt-4 p-2 fs-5' style={{ background: '#494C4F', border: 'none' }} onClick={handleSubmit}>
                                    S'inscrire
                                </Button>
                            </Link>
                        </Form>
                    </Col>
                    <div className="text-center fs-5">
                        <p><span className='text-white'>Vous avez déjà un compte?</span> 
                            <Link to="/" style={{ color: '#FFD964', textDecoration: 'none' }}>Se connecter</Link>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Inscription;