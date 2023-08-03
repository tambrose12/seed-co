import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function Cart(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 2;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-md-center" md='auto' style={{ marginBottom: '10rem', justifyContent: 'center' }}>

                <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Your Shopping Cart</h1>
                <div style={{ margin: '1rem' }}>
                    {cartItems.length === 0 && <div><h4 style={{ marginTop: '1rem' }}>Cart Is Empty</h4></div>}
                    {cartItems.map((item) => (
                        <Row style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                            <Col xs={6} md={2}><Image src={item.image} thumbnail /><h5>{item.name}</h5></Col>
                            {/* <Col xs={6} md={2}><h5>{item.name}</h5></Col> */}
                            <Col xs={6} md={'auto'} style={{ marginTop: '1rem' }}>
                                <Button onClick={() => onRemove(item)} className="remove" variant="outline-success" >
                                    -
                                </Button>{' '}
                                <Button onClick={() => onAdd(item)} className="add" variant="success" >
                                    +
                                </Button>
                            </Col>

                            <Col xs={6} md={2} style={{ marginTop: '1rem' }}>
                                {item.qty} x ${item.price.toFixed(2)}
                            </Col>
                        </Row>
                    ))}

                    {cartItems.length !== 0 && (
                        <>
                            <hr></hr>
                            <Row style={{ justifyContent: 'left' }}>
                                <Col xs lg="2">Items Price</Col>
                                <Col xs lg="2">${itemsPrice.toFixed(2)}</Col>
                            </Row>
                            <Row style={{ justifyContent: 'left' }}>
                                <Col xs lg="2">Tax Price</Col>
                                <Col xs lg="2">${taxPrice.toFixed(2)}</Col>
                            </Row>
                            <Row style={{ justifyContent: 'left' }}>
                                <Col xs lg="2">Shipping Price</Col>
                                <Col xs lg="2">
                                    ${shippingPrice.toFixed(2)}
                                </Col>
                            </Row>

                            <Row style={{ justifyContent: 'left' }}>
                                <Col xs lg="2">
                                    <strong>Total Price</strong>
                                </Col>
                                <Col cxs lg="2">
                                    <strong>${totalPrice.toFixed(2)}</strong>
                                </Col>
                            </Row>
                            <hr />
                            <div className="row">
                                <Button onClick={() => alert('Implement Checkout!')} variant="success" >
                                    Checkout
                                </Button>
                            </div>
                        </>
                    )}
                </div>
                <FooterComponent />
            </Container >
        </div >

    )
}