import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
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
      else {
        console.log('already exist');
      }
      }
    else {
      console.log("max limit exceed");
    }
  }

  const handleClearCart = () => {
    const blankCart = [];
    setCart(blankCart);
  }
  
  let randomMsg = false;
  const randomlyPick = () => {
    if (cart.length > 0) {
      const randomProduct = cart[Math.floor(Math.random() * cart.length)];
      const randomlyPicked = [randomProduct];
      setCart(randomlyPicked);
      randomMsg = true;
    }
  }


  return (
    <div>
      <Header></Header>
      <div className='container row mx-auto'>
        <Shop handleAddToCart={handleAddToCart}></Shop>
        <Cart cart={cart} handleClearCart={handleClearCart} randomlyPick={randomlyPick} randomMsg={randomMsg}></Cart>
        </div>
    </div>
  );
}

export default App;
