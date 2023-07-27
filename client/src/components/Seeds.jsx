import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"
import { useEffect, useState } from "react"
import SeedCard from "./SeedCard"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

export default function Seeds({ seedCards }) {

    console.log(seedCards)

    return (
        <div id="seeds">
            <NavbarComponent />
            <h1 style={{ marginTop: '1rem' }}>Our Seeds</h1>

            <Container id='seedContainer' className="justify-content-md-center flex-wrap" md='auto' style={{ marginBottom: '7rem', justifyContent: 'center' }}>
                {seedCards}
            </Container>

            <FooterComponent />
        </div>
    )
}