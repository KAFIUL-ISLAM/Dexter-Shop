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

  return (
    <div>
      <Header></Header>
      <div className='container row mx-auto'>
        <Shop handleAddToCart={handleAddToCart}></Shop>
        <Cart cart={cart}></Cart>
        </div>
    </div>
  );
}

export default App;
