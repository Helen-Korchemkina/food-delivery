import ShopList from '../ShopList/ShopList';

const Fooder = ({food, onAdd}) => {
    return (
        <ShopList food={food} addToCart={onAdd} />
)
    
}

export default Fooder;