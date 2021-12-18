
import { CartContext } from '../contexts/CartContext'
import '../scss/Cart.scss'
import { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore';
import CartProduct from './CartProduct'
import Spinner from './Spinner';

const Cart = () => {
    const formNameRef = useRef();
    const formEmailRef = useRef();
    const formTelRef = useRef();

    const { cart, setCart } = useContext(CartContext);
    let { items, totalPrice } = cart;

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [orderId, setOrderId] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const handleNameChange = (event) => { setUserName(event.target.value) }
    const handleEmailChange = (event) => { setUserEmail(event.target.value) }
    const handlePhoneChange = (event) => { setUserPhone(event.target.value) }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const order = {
                buyer: {
                    name: userName,
                    email: userEmail,
                    phone: userPhone
                },
                items: cart.items,
                date: Date.now(),
                total: cart.totalPrice
            }
            sendOrder(order);
            console.log(order);
            removeStock();
        }
    }

    const removeStock = () => {
        const db = getFirestore()
        const batch = writeBatch(db);

        cart.items.forEach(item => {
            const itemRef = doc(db, 'items', item.id);
            batch.update(itemRef, { stock: item.stock - item.quantity })
        })
        batch.commit();
    }

    const sendOrder = (order) => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
        setShowAlert(true);
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
        setOrderId('');
        clearForm();
        setCart({ items: [], totalQuantity: 0, totalPrice: 0 })
    }
    const clearForm = () => {
        setUserName('')
        setUserEmail('')
        setUserPhone('')
    }
    const validateForm = () => {
        /* eslint-disable */
        const regexPhone = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
        const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        let formValidation = true;

        if (userName.length < 4) {
            formValidation = false;
            formNameRef.current.classList.add('cart__form--error')
        } else {
            formNameRef.current.classList.remove('cart__form--error')
        }

        if (!regexPhone.test(userPhone)) {
            formValidation = false;
            formTelRef.current.classList.add('cart__form--error')
        } else {
            formTelRef.current.classList.remove('cart__form--error')
        }

        if (!regexMail.test(userEmail)) {
            formValidation = false;
            formEmailRef.current.classList.add('cart__form--error')
        } else {
            formEmailRef.current.classList.remove('cart__form--error')
        }

        return formValidation;
    }

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
            {showAlert ?
                orderId ?
                    <div className='cart__alertContainer'>
                        <div className='cart__alert'>
                            <img className='cart__alertCheck' src="./assets/check.png" alt="check" />
                            <h2 className="cart__alertText cart__alertText--title">Compra realizada correctamente</h2>
                            <span className="cart__alertText cart__alertText--secondary">Total: <span className='s-bold'>${cart.totalPrice}</span></span>
                            <span className="cart__alertText cart__alertText--secondary">ID: <span className='s-bold'>{orderId}</span></span>
                            <span className="cart__alertText cart__alertText--secondary">Muchas gracias por su compra</span>
                            <span className="cart__alertButton" onClick={handleCloseAlert}>Aceptar</span>
                        </div>
                    </div> : <Spinner />
                : null}
            <div className='cart__container'>
                {items.map(item => <CartProduct key={item.id} item={item} />)}
                <span className='cart__total'>Total: <span className='cart__totalNumber'>${totalPrice}</span></span>
            </div>
            <div className='cart__formContainer'>
                <form className='cart__form'>
                    <h4 className='cart__formTitle'>Complete sus datos</h4>
                    <input ref={formNameRef} type="text" name="name" placeholder='Nombre' value={userName} onChange={handleNameChange} />
                    <input ref={formEmailRef} type="email" name="email" placeholder='Email' value={userEmail} onChange={handleEmailChange} />
                    <input ref={formTelRef} type="tel" name="phone" placeholder='Telefono' value={userPhone} onChange={handlePhoneChange} />
                    <input className='cart__formSubmit' type="submit" value='Terminar Compra' onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Cart;