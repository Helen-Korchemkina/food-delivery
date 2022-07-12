import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import s from './ShoppingCartList.module.css';

const ShoppingCartList = ({ cart, deleteProduct, increment, decrement }) => {
  return cart.map(c => (
    <li key={c.id} className={s.products__card}>
      <img className={s.products__img} src={c.image} alt={c.title} />
      <div className={s.about_product}>
        <h3 className={s.products__name}>{c.title}</h3>
        <p className={s.products__price}>Price: $ {c.price} USD</p>
        <div className={s.count}>
          <input
            onChange={e => {}}
            type="number"
            className={s.count__input}
            min="1"
            max="100"
            value={c.count}
          />
          <div className={s.count__controls}>
            <button
              type="button"
              className="count__up"
              onClick={() => {
                increment(c.id);
              }}
            >
              <HiChevronUp />
            </button>
            <button
              type="button"
              className={s.count__down}
              onClick={() => {
                decrement(c.id);
              }}
            >
              <HiChevronDown />
            </button>
          </div>
        </div>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteProduct(c.id)}
      >
        <HiX />
      </button>
    </li>
  ));
};

export default ShoppingCartList;
