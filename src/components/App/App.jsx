import { useEffect, useState } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Shop from '../Shop/Shop';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Fooder from 'components/Shop/Fooder/Fooder';
import Eater from 'components/Shop/Eater/Eater';
import Cooker from 'components/Shop/Cooker/Cooker';
import { cookerFoodList } from '../../data/cooker';
import { eaterFoodList } from '../../data/eater';
import { fooderFoodList } from '../../data/fooder';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

const App = () => {
  const [foodFooder, setFoodFooder] = useState([]);
  const [foodCooker, setFoodCooker] = useState([]);
  const [foodEater, setFoodEater] = useState([]);
  
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
    const fetchProductsList = () => {
      setFoodFooder(fooderFoodList);
      setFoodCooker(cookerFoodList);
      setFoodEater(eaterFoodList);
      };
    fetchProductsList();
  }, []);

  const addToCart = item => {
    const isItem = cart.find(c => c.id === item.id);
    if (isItem) {
      increment(item.id);
      toast.success(`Item added`);
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
    toast.success(`Item added`);
  };

  const deleteProduct = id => {
    setCart(cart => cart.filter(c => c.id !== id));
    toast.info(`Item deleted`);
  };

  const increment = id => {
    setCart(cart =>
      cart.map(c => {
        if (c.id === id) {
          return {
            ...c,
            count: c.count + 1,
          };
        }
        return c;
      })
    );
  };
  const decrement = id => {
    setCart(cart =>
      cart.map(c => {
        if (c.id === id) {
          if (c.count <= 1) {
            deleteProduct(id);
          }
          return {
            ...c,
            count: c.count - 1,
          };
        }
        return c;
      })
    );
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
            element={<Fooder food={foodFooder} onAdd={addToCart} />}
          />
          <Route
            path="eater"
            element={<Eater food={foodEater} onAdd={addToCart} />}
          />
          <Route
            path="cooker"
            element={<Cooker food={foodCooker} onAdd={addToCart} />}
          />
        </Route>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cart={cart}
              deleteProduct={deleteProduct}
              increment={increment}
              decrement={decrement}
              totalPrice={totalPrice}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<Navigate to="/shop" />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
};

export default App;
