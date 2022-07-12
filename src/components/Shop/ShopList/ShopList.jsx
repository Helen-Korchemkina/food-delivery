import s from './ShopList.module.css';

const ShopList = ({ food, addToCart }) => {
  return food.map(f => (
    <li className={s.products__card} key={f.id}>
      <img className={s.products__img} src={f.image} alt={f.title} />
      <div className={s.about_product}>
        <div>
          <h3 className={s.products__name}>{f.title}</h3>
          <p className={s.products__price}>$ {f.price} USD</p>
        </div>
        <button type="button" className={s.button} onClick={() => addToCart(f)}>
          Add to Cart
        </button>
      </div>
    </li>
  ));
};

export default ShopList;
