import ShopList from '../ShopList/ShopList';

const Eater = ({ food, onAdd }) => {
  return <ShopList food={food} addToCart={onAdd} />;
};

export default Eater;
