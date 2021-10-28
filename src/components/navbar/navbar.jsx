import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div className='navBar'>
            <h1 className='navBar__logo'>Libros.com</h1>
            <div className="navBar__search">
                <FontAwesomeIcon
                    className='navBar__searchIcon'
                    icon={faSearch} />
                <input type='text' className='navBar__searchInput' />
            </div>
            <div className='navBar__cartContainer'>
                <span className='cart__badge'>3</span>
                <FontAwesomeIcon
                    className='navBar__cartIcon'
                    icon={faShoppingCart} />
            </div>
        </div>
    )
};
