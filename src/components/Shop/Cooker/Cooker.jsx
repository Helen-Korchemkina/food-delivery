import ShopList from '../ShopList/ShopList';

const Cooker = ({ food, onAdd }) => {
  return <ShopList food={food} addToCart={onAdd} />;
};

export default Cooker;
