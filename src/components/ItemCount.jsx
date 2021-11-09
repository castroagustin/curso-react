import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../scss/ItemCount.scss';

const ItemCount = ({ stock, initial }) => {

    const onAdd = () => {
        if (cantidad <= disponible) {
            setDisponible(disponible - cantidad);
            alert(`Agrego ${cantidad} ${cantidad > 1 ? 'productos' : 'producto'} al carrito`);
            setCantidad(initial);
        }
    }

    const sumarCant = () => {
        if (cantidad < disponible) {
            setCantidad(Number(cantidad) + 1);
        }
    }
    const restarCant = () => {
        if (cantidad > 1) {
            setCantidad(Number(cantidad) - 1);
        }
    }

    const [cantidad, setCantidad] = useState(initial);
    const [disponible, setDisponible] = useState(stock);

    return (
        <div className='itemCountContainer' cantidad={cantidad}>
            <p className='itemCount__product'>Producto 1</p>
            <p className='itemCount__stock'>Stock: {disponible}</p>
            <div className='itemCount__buttons'>
                <FontAwesomeIcon
                    className='itemCount__icon'
                    icon={faMinus}
                    onClick={restarCant} />
                <span className='itemCount__number'>{cantidad}</span>
                <FontAwesomeIcon
                    className='itemCount__icon'
                    icon={faPlus}
                    onClick={sumarCant} />
            </div>
            <span className='itemCount__purchase' onClick={onAdd}>Agregar al carrito</span>
        </div>
    )
}

export default ItemCount;