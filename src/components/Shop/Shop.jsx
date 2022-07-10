import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchProducts from 'services/api';
import s from './Shop.module.css';

const Shop = () => {
    const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const trendingFilms = await fetchProducts();
        setFood(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchProductsList();
  }, []);
    
    return (
        <div className={s.container}>
        <div className={s.box}>
                <h2 className={s.title}>Shops:</h2>
                <ul className={s.list}>
                    <li>
    <NavLink to="fooder" className={({ isActive }) => (isActive ? s.active : s.link)}>Fooder</NavLink>
                        </li>
                    <li>
    <NavLink to="eater" className={({ isActive }) => (isActive ? s.active : s.link)}>Eater</NavLink>
</li>
                    <li>
    <NavLink to="coocer" className={({ isActive }) => (isActive ? s.active : s.link)}>Cooker</NavLink>
</li>
                </ul>
        </div>
        <div className={s.box}>
                <ul className={s.products__list}>
                    {food && food.map(f => (
                        <li className={s.products__card} key={f.id}>
             <img className={s.products__img} src={f.image} alt={f.title} />
                        <div className={s.about_product}><div>
                                <h3 className={s.products__name}>{f.title}</h3>
                        <p className={s.products__price}>$ {f.price} USD</p></div>
              <button type='button' className={s.button}>Add to Cart</button></div>          
                    </li>
))}
                </ul>      
            </div>
            </div>
        )
}

export default Shop;