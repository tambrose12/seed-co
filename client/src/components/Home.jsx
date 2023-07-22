import React from 'react'
import RoundLogo from '/src/RoundLogo.png'
import mainImg from '/src/mainImg.jpg'
import NavbarComponent from './NavbarComponent'
import About from './About'
import FooterComponent from './FooterComponent'


export default function Home() {

    return (
        <div id='home'>
            <NavbarComponent />
            <img src={mainImg} className='mainImg' alt='Photo by <a href="https://unsplash.com/@viazavier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laura Ockel</a> on <a href="https://unsplash.com/photos/eUdVWOBUjJw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
            <About />
            <FooterComponent />
        </div>
    )
}