import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import QNA from './Components/QNA/QNA';
import Shop from './Components/Shop/Shop';

function App() {
  const [ cart, setCart ] = useState([]);

  const handleAddToCart = (product) => {
    const idExist = cart.find(cartProduct => product.id === cartProduct.id)
    if (cart.length < 4 ) {
      if (!idExist) {
        const newCart = [...cart, product];
        setCart(newCart);
      }
    }
  }

  const handleClearCart = () => {
    const blankCart = [];
    setCart(blankCart);
  }
  

  const randomlyPick = () => {
    if (cart.length > 0) {
      const randomProduct = cart[Math.floor(Math.random() * cart.length)];
      const randomlyPicked = [randomProduct];
      setCart(randomlyPicked);
    }
  }
  
  const removeFromCart = product => {
    const updatedCart = cart.filter(item => item !== product);
    setCart(updatedCart);
  }


  return (
    <div>
      <Header></Header>
      <div className='container row mx-auto'>
        <Shop handleAddToCart={handleAddToCart}></Shop>
        <Cart cart={cart} handleClearCart={handleClearCart} randomlyPick={randomlyPick} removeFromCart={removeFromCart}></Cart>
        <QNA></QNA>
        </div>
    </div>
  );
}

export default App;
