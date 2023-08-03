import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import RoundLogo from '/src/RoundLogo.png'
import mainImg from '/src/mainImg.jpg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home'
import Seeds from './components/Seeds'
import Contact from './components/Contact'
import Tips from './components/Tips'
import SeedCard from './components/SeedCard'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  const [seeds, setSeeds] = useState([])

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    fetch('http://localhost:5555/seeds')
      .then(r => r.json())
      .then(seeds => setSeeds(seeds))
  }, [])

  console.log(seeds)
  let seedCards = seeds.map(seed => <SeedCard key={seed.id} seed={seed} onAdd={onAdd} />)

  console.log(seedCards)

  return (
    <>
      <Routes>
        <Route index element={<Home countCartItems={cartItems.length} />} />
        <Route path='/seeds' element={<Seeds seedCards={seedCards} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tips' element={<Tips />} />
        <Route path='/cart' element={
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} />}
        />
      </Routes>
      {/* <NavbarComponent />
      <img src={mainImg} className='mainImg' alt='Photo by <a href="https://unsplash.com/@viazavier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laura Ockel</a> on <a href="https://unsplash.com/photos/eUdVWOBUjJw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' />
      <div>
        <img src={RoundLogo} className="logo" alt="Logo" />
      </div>
      <h1 className='h1'>About Us</h1>
      <p> Hope & Hunter Seed Co. is run out of the backyard of a small family in South Carolina, named after the two sweet kids that love to garden with their grandmother. Grandma spent a lot of years learning how to garden, and how to gather seeds from her garden to replant the following year or season. Hope & Hunter work very hard to help their grandma in the garden, and love to see the beautiful flowers and tasty fruit and veggies they grow together every year.</p>
      <p>Now they would like to share that love and excitment with you!</p>
      <p>Shop their seeds to plant your own garden full of bright and beautiful flowers, fruit, and vegetables! We hope you can love your garden as much as we do!</p> */}
    </>
  )
}

export default App
