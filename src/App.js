import React, {  useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartIsShown, setcartIsShown] = useState(false);
  const showCart = () => {
    setcartIsShown(true)
  };
  const hideCart = () => {
    setcartIsShown(false)

  };
  return (
    <CartProvider>
      {cartIsShown &&   <Cart onhideCart={hideCart} />}

      <Header onShowCart={showCart} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
