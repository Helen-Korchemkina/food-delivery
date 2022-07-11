import { NavLink, Outlet } from 'react-router-dom';
import s from './Shop.module.css';

const Shop = () => {

    
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
    <NavLink to="cooker" className={({ isActive }) => (isActive ? s.active : s.link)}>Cooker</NavLink>
</li>
                </ul>
        </div>
        <div className={s.box}>
                <ul className={s.products__list}>
                    <Outlet/>
                </ul>      
            </div>
            </div>
        )
}

export default Shop;