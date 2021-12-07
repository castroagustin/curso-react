import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import '../scss/Cart.scss'

const CartProduct = ({ item }) => {

    const { cart, setCart } = useContext(CartContext)
    let { items, totalPrice, totalQuantity } = cart;

    const onAdd = () => {
        if (item.quantity < item.stock) {
            item.quantity++;
            totalQuantity++;
            totalPrice += item.price;
            setCart({ items, totalQuantity, totalPrice })
        }
    }

    const onRemove = () => {
        if (item.quantity > 1) {
            item.quantity--;
            totalQuantity--;
            totalPrice -= item.price;
            setCart({ items, totalQuantity, totalPrice })
        }
    }

    const onDelete = () => {
        items = items.filter(i => i.id !== item.id);
        totalQuantity -= item.quantity;
        totalPrice -= (item.price * item.quantity);
        setCart({ items, totalQuantity, totalPrice })
    }

    return (
        <div className="cart__row" id={`cartRow-${item.id}`} data-key=''>
            <img className="cart__prodImg" src={`./assets/${item.pictureUrl}`} alt={item.title}></img>
            <div className="cart__prodText">
                <div>
                    <p className="cart__prodName">{item.title}</p>
                </div>
                <div className="cart__cantidadContainer">
                    <FontAwesomeIcon icon={faPlus} onClick={onAdd} />
                    <span className="cart__cantidad" id="cartNumber">{item.quantity}</span>
                    <FontAwesomeIcon icon={faMinus} onClick={onRemove} />
                </div>
                <span className='cart__delete' onClick={onDelete}>Eliminar</span>
            </div>
            <span className="cart__prodPrice">${item.price * item.quantity}</span>
        </div>
    )
}

export default CartProduct;