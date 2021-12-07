import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../scss/CartWidget.scss'

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <Link to='/cart' className='navBar__cartContainer'>
            {cart.totalQuantity >= 1 && <span className='cart__badge'>{cart.totalQuantity}</span>}
            <FontAwesomeIcon
                className='navBar__cartIcon'
                icon={faShoppingCart} />
        </Link>
    )
}

export default CartWidget;