import { useEffect, useState } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import {fetchProducts} from 'services/api';
import Shop from '../Shop/Shop';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Fooder from 'components/Shop/Fooder/Fooder';
import Eater from 'components/Shop/Eater/Eater';
import Cooker from 'components/Shop/Cooker/Cooker';
import s from './App.module.css';

const App = () => {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );

  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, curr) => prev + Number(curr.price) * curr.count, 0)
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const trendingFilms = await fetchProducts();
        setFood(trendingFilms);
      } catch (error) {
        alert(error);
      } finally {
      }
    };
    fetchProductsList();
  }, []);

  const addToCart = item => {
    const isItem = cart.find(c => c.id === item.id);
        if (isItem) {
          increment(item.id);
          alert(`Item added`); 
          return;
      } 
        setCart([
          {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            count: 1,
          },
          ...cart,
        ]);
    alert(`Item added`); 
  };

  const deleteProduct = id => {
    setCart(cart => cart.filter(c => c.id !== id));
    alert(`Item deleted`);
  };

  const increment = id => {
    setCart(cart => cart.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      } return c;
    }))
  };
  const decrement = id => {
    setCart(cart => cart.map(c => {
      if (c.id === id) {
        if (c.count <= 1) {
          deleteProduct(id);
        }
        return {
          ...c,
          count: c.count - 1,
        };
      } return c;
   }))
  };

  return (
    <div className={s.container}>
      <header>
        <nav>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/shopping-cart"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            ShoppingCart
          </NavLink>
          <hr />
        </nav>
      </header>
      <Routes>
        <Route path="/shop" element={<Shop />}>
          <Route
            path="fooder"
            element={<Fooder food={food} onAdd={addToCart} />}
          />
          <Route
            path="eater"
            element={<Eater food={food} onAdd={addToCart} />}
          />
          <Route
            path="cooker"
            element={<Cooker food={food} onAdd={addToCart} />}
          />
        </Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart cart={cart} deleteProduct={deleteProduct}
            increment={increment} decrement={decrement} totalPrice={totalPrice}
            setCart={setCart} />}
        />
        <Route path="*" element={<Navigate to="/shop" />} />
      </Routes>
      
    </div>
  );
};

export default App;
