import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    if (amount === 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>Sepetim</h2>
                    <h4 className='empty-cart'>Boş sepet</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>Sepetim</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>Total <span>{total.toFixed(2)}</span></h4>
                </div>
                <button type='button' className='btn clear-btn' onClick={() => dispatch(openModal())}>Temizle</button>
            </footer>
        </section>
    )
}

export default CartContainer