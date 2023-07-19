import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RoundLogo from '/public/RoundLogo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <div>
        <img src={RoundLogo} className="logo" alt="Logo" />
      </div>
      <h1 className='h1'>About Us</h1>
      <p> Hope & Hunter Seed Co. is run out of the backyard of a small family in South Carolina, named after the two sweet kids that love to garden with their grandmother. Grandma spent a lot of years learning how to garden, and how to gather seeds from her garden to replant the following year or season. Hope & Hunter work very hard to help their grandma in the garden, and love to see the beautiful flowers and tasty fruit and veggies they grow together every year.</p>
      <p>Now they would like to share that love and excitment with you!</p>
      <p>Shop their seeds to plant your own garden full of bright and beautiful flowers, fruit, and vegetables! We hope you can love your garden as much as we do!</p>
    </>
  )
}

export default App
