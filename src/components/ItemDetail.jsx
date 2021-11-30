import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../scss/ItemDetail.scss';

const ItemDetail = ({ item }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [cantidad, setCantidad] = useState(1);
    const [cartBtn, setCartBtn] = useState(false);

    const { title, author, price, category, description, pictureUrl } = item;
    return (
        <>
            <img className='itemDetail__img' src={`../assets/${pictureUrl}`} alt={title}></img>
            <div className='itemDetail__textContainer'>
                <h2 className='itemDetail__title'>{title}</h2>
                <div className='itemDetail__details'>
                    <span className='itemDetail__author'>{author}</span>
                    <span className='itemDetail__circle' />
                    <span className='itemDetail__category'>{category}</span>
                </div>
                <h3 className='itemDetail__price'>${price}</h3>
                <span className='itemDetail__description'>{description}</span>
                {
                    cartBtn ?
                        <Link to={'/cart'} className='itemDetail__cartBtn'>
                            <FontAwesomeIcon icon={faShoppingCart} /> Agregaste {cantidad} producto/s al carrito
                        </Link> :
                        <ItemCount stock={item.stock} initial={1} cantidad={cantidad} setCantidad={setCantidad} setCartBtn={setCartBtn} />
                }

            </div>
        </>
    )
}

export default ItemDetail;