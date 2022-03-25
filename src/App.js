import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container row mx-auto'>
        <Shop></Shop>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
