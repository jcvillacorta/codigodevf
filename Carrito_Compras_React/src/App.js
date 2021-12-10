import React from 'react';
import { useState } from 'react';
import Basket from './components/Basket';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SignUp from './components/Signup';
import Login from './components/Login';
import data from "./data";


const page_products = "products"
const page_cart = "cart"
const page_signup = "signup"
const page_login = "login"

function App() {
  const {products} = data;
  const {users} = data;
  const [cartItems, setCartItems] = useState([])
  const [page, setPage] = useState(page_products)

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
        )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) { //Si esto es verdadero, entonces remover el producto
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else { //Restar la cantidad
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
        )
    }
  }

  const borrarTodo = () => {
    setCartItems([]);
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  return (
    <div>
      <NavBar countCartItems={cartItems.length} navigateTo={navigateTo} page_cart={page_cart} page_products={page_products} page_signup={page_signup} page_login={page_login}/>
      <div className="container-lg">
        <div className="row mt-4">
          <div className="col">
          {page === page_products && <Main onAdd={onAdd} products={products} />}
          {page === page_cart && <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} borrarTodo={borrarTodo} />}
          {page === page_signup && <SignUp />}
          {page === page_login && <Login navigateTo={navigateTo} page_signup={page_signup} users={users} page_cart={page_cart} />}
          </div>
            {/* <div className="col-8">
              <Main onAdd={onAdd} products={products} />
            </div>
            <div className="col-4">
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
