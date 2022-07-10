import { Formik, Field, Form } from 'formik';
import s from './ShoppingCard.module.css';

const ShoppingCard = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
    >
      <Form>
        <div className={s.container}>
          <div className={s.box}>
            <label htmlFor="name">Name</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              required
            />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              required
            />
            <label htmlFor="phone">Phone</label>
            <Field
              id="phone"
              name="phone"
              placeholder="+380991234578"
              required
            />
            <label htmlFor="phone">Phone</label>
            <Field
              id="address"
              name="address"
              placeholder="Kyiv, Khreshatyk street, 1"
              required
            />
          </div>
          <div className={s.box}>
            <ul className={s.products__list}>
              <li className={s.products__card}>
                <img
                  className={s.products__img}
                  src="http://loremflickr.com/640/480/food"
                  alt=""
                />
                <div className={s.about_product}>
                  <div>
                    <h3 className={s.products__name}>Product</h3>
                    <p className={s.products__price}>$ 21.00 USD</p>
                  </div>
                  <label htmlFor="amount">
                    Amount
                    <Field type="number" id="amount" name="amount" min="0" max="120" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p>Total price:</p>
        <button className={s.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ShoppingCard;
