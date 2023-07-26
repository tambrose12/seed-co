import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"
import { useEffect, useState } from "react"
import SeedCard from "./SeedCard"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Seeds({ seedCards }) {

    console.log(seedCards)

    return (
        <div id="seeds">
            <NavbarComponent />
            <h2 style={{ marginTop: '1rem' }}>Our Seeds</h2>

            <div id='seedContainer' className="container container-fluid row flex-wrap">
                {seedCards}
            </div>

            <FooterComponent />
        </div>
    )
}