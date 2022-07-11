import { Formik, Field, Form } from 'formik';
import { fetchOrder } from 'services/api';
import ShoppingCartList from './ShoppingCartList/ShoppingCartList';
import s from './ShoppingCart.module.css';

const ShoppingCart = ({ cart, setCart, deleteProduct, increment, decrement, totalPrice }) => {

  const handleSubmit = ({ name, email, phone, address }, { resetForm }) => {
    alert(`The order has been sent`);
    fetchOrder({ name, email, phone, address, cart });
    setCart([]);
    resetForm();
}

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form >
        <div className={s.container}>
          <div className={s.box}>
            <label className={s.label} htmlFor="name">Name</label>
            <Field
              className={s.input}
              id="name"
              name="name"
              placeholder="Jane"
              required
            />
            <label className={s.label} htmlFor="email">Email</label>
            <Field
              className={s.input}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              required
            />
            <label className={s.label} htmlFor="phone">Phone</label>
            <Field
              className={s.input}
              id="phone"
              name="phone"
              placeholder="+380991234578"
              required
            />
            <label className={s.label} htmlFor="phone">Address</label>
            <Field
              className={s.input}
              id="address"
              name="address"
              placeholder="Kyiv, Khreshatyk street, 1"
              required
            />
          </div>
          <div className={s.box}>
            {(cart.length > 0)
              ? <ul className={s.products__list}>
              <ShoppingCartList cart={cart} deleteProduct={deleteProduct} increment={increment} decrement={decrement} />
            </ul>
              : <h2 className={s.empty}>Сart is empty</h2>
            }
          </div>
        </div>
        <div className={s.total}>
          <p >Total price: $ {totalPrice},00 USD</p>
        <button className={s.button} type="submit">
          Submit
        </button>
</div>
      </Form>
    </Formik>
  );
};

export default ShoppingCart;
