import { useState } from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Shop from '../Shop/Shop';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import s from './App.module.css';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className={s.container}>
      <header>
       <nav>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? s.active : s.link)}>Shop</NavLink>
        <NavLink to="/shopping-card" className={({ isActive }) => (isActive ? s.active : s.link)}>ShoppingCard</NavLink>
        <hr />
        </nav>
        </header>
        <Routes>
        <Route path="/shop" element={<Shop />} >
          {/* <Route path="fooder" element={<Fooder />} />
          <Route path="eater" element={<Eater />} />
          <Route path="cooker" element={<Cooker />} /> */}
          </Route>
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="*" element={<Navigate to="/shop" />} />
        </Routes>
    </div>
  );
};

export default App;
