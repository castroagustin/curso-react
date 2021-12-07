
import { CartContext } from '../contexts/CartContext'
import '../scss/Cart.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'

const Cart = () => {

    const { cart } = useContext(CartContext);
    let { items, totalPrice } = cart;

    if (items.length === 0) {
        return (
            <div className='container'>
                <div className='cart__container'>
                    <h3 className='cart__message'>No hay productos en el carrito :(</h3>
                    <Link to='/' className='cart__messageBtn'>Ver productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='cart__container'>
                {items.map(item => <CartProduct key={item.id} item={item} />)}
                <span className='cart__total'>Total: <span className='cart__totalNumber'>${totalPrice}</span></span>
            </div>
        </div>
    )
}

export default Cart;